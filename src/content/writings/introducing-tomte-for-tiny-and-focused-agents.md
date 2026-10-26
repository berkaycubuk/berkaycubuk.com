---
title: Introducing Tomte for tiny and focused agents
date: 2026-10-26
description: "Tomte is an open-source Go framework for building small, focused agents that build to tiny binaries, deploy to your own VPS with one command and cap their own token spending."
cover: /images/introducing-tomte-for-tiny-and-focused-agents/cover.jpg
cover_alt: "A small glowing garden gnome standing on a server box with three lit LEDs, in front of a dim terminal screen"
---

We don't need a big complex agent that does everything. What we need is small, focused, persistent and lightweight agents. Not every agent needs a browser or a frontier level model. Think of it like having a small context window and doing one specific task at a time with it. Not every task requires an LLM, some may even be possible with logic only. For example, an agent can watch SSH logs and notify you when an unfamiliar login is made.

The future I see is more like apps rather than one big enterprise suite. There will be lots of agents that people buy, write and deploy. We will see more marketplaces like the ChatGPT marketplace but for anyone bringing their own small and focused agents.

I liked what [Vercel](https://vercel.com) did with the [Eve framework](https://vercel.com/eve). They simplified the steps to build an agent. They also give you everything to deploy and observe your agents. But I have two problems with their approach. First, I want my agents to be lightweight binaries that use low memory, storage and CPU. Second, I want to deploy my agents anywhere I want, not just Vercel. This led me to build my own agent framework, Tomte.

Tomte allows you to build an agent with Go code and gives you a set of tools. For example, hn-digest agent is just 133 lines of Go code and builds to a 6.7 MB Linux binary and uses about 10 MB of memory.

Tomte handles the deployment by installing a binary on your VPS so you can deploy your agent with a CLI command. Logs and runs are also handled via CLI.

```sh
go install github.com/berkaycubuk/tomte/cmd/tomte@latest

tomte setup box                                    # once per machine
tomte deploy -env hn-digest.env box ./hn-digest    # build, upload, run as a systemd service
tomte logs box hn-digest                           # the last 50 lines of its log
tomte runs box hn-digest                           # its last 10 runs: when, trigger, cost, outcome
```

Since every agent is basically a Go binary, you can technically do a lot of things with them. As a To-Do list example, I built Hacker News daily digest agent that sends me message over Telegram with a Telegram bot. It uses OpenRouter with a cheap model to pick stories I'll like.

```go
func main() {
	tomte.New("hn-digest",
		tomte.Instructions(instructions),
		tomte.Model("https://openrouter.ai/api/v1", os.Getenv("MODEL"), os.Getenv("MODEL_KEY")),
		tomte.Tool("top_stories", "The current top Hacker News stories, best first", topStories),
		tomte.Cron("0 8 * * *", "Send this morning's digest."),
		tomte.SendTo(telegram.New(os.Getenv("TELEGRAM_TOKEN"), os.Getenv("TELEGRAM_CHAT"))),
	).Run()
}
```

```go
type storiesArgs struct {
	Limit int `json:"limit,omitempty" jsonschema:"how many stories, 1 to 60; 30 if not given"`
}

func topStories(ctx context.Context, in storiesArgs) ([]story, error) {
	// fetch https://hacker-news.firebaseio.com/v0/topstories.json …
}
```

"Why not build an agent without a framework?" you might ask. Without one, you will need to handle the deployment just like any other project. It will be fine if you're just deploying one or two agents. Things will get complicated once you start deploying more and more. You'll encounter errors and lots of log messages. Each agent may have its own cron and system specific files.

This framework is built for developers who are managing lots of agents. Tomte gives you everything to see logs, what is running and what is not. Plus this framework keeps every agent small in binary size and allows you to run more agents on a small server. For example, if each agent uses 10 MB memory when idle, in theory you can fit fifty agents in well under 1 GB of memory.

```
$ tomte ls box
AGENT       STATE        MEMORY   NEXT RUN    LAST RUN               TODAY
hn-digest   active 3h    9.8M     Mon 08:00   2h ago, sent           1 run, $0.004 of $0.25
```

Another great advantage of using Tomte is that you cap token spending. When developing an agent you can define token cost and limit maximum spent. It becomes helpful when you have thousands of small agents running millions of LLM calls a day.

```go
tomte.Price(0.60, 2.20),    // the model's price in dollars per million tokens (in, out)
tomte.MaxCost(0.05, 0.25),  // stop a run at $0.05, and stop running for the day at $0.25
tomte.MaxSteps(5),          // at most 5 model calls per run
```

If you're planning to build a complex agent with lots of capabilities, don't use Tomte to build it. I suggest writing your own custom system rather than relying on a framework in this case. For small and specific tasks, Tomte is your friend.

Building with a framework also helps your coding agents, so they learn the framework and can build agents faster and manage them without requiring a human in the loop.

Over time you'll have more integrations under your belt. These integrations can also be developed and shared by other people or agents publicly. For example, I'm developing and agent-native communication tool and integrated Tomte to support it as a channel. You can do the same for your products too and let other people use them with their agents.

```go
type Channel interface {
	Name() string
	Send(ctx context.Context, m Message) error
}
```

## Try it yourself

Tomte is open-source! Visit https://github.com/berkaycubuk/tomte to build your first agent.

## What's next

My next project is a Telegram bot that reviews your website for SEO and AI agent optimization. It sends you a weekly report with as a message, with an optional PDF. The agent has commands to set the site, request a payment from the user and see the last report.

Not all of us have the time to manage a VPS and keep it secure, so a cloud version might come this year.

If you're looking to write an agent for your business and don't know how to do it, I'm here to help! Just write me an email explaining your project and I'll set up a call with you for the details.
