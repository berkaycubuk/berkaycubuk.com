---
title: Give computers to agents
date: 2026-10-19
description: "Why agents need their own computers: my experiment running a small-model agent on a VPS with a browser, memory, nightly reflections and Telegram."
cover: /images/give-computers-to-agents/cover.jpg
cover_alt: "A glowing CRT monitor and computer tower on a desk in a dark room"
---

I think the magic of coding agents comes from their ability to use tools, especially terminal tools. They're okay at writing and using terminal. With a terminal, they can reach almost any tool. So the next step will be giving them their own computers so they can do real work behind the scenes and as the owners of agents we can focus on what really matters for our craft. People are amazed by what agents like [Instinct](https://instinct.com), [Muse](https://muse.ai) and [dots](https://openai.com/index/introducing-dots) can do, because they run proactively in the background on their own computers.

I use Linux on VPS machines for my professional work so I'm pretty familiar with the environment. So to give it a test I rented a minimal but sufficient VPS and set up an agent. This agent is crafted by me to keep things simple and lightweight. And to keep everything in budget, I'm using Nvidia's free 120b parameter model. The most interesting part happens when you see it in action.

With the current state of models, they're pretty good at understanding intention, images and computers. When we combine all these, things start to get interesting. This agent can use the browser (chromium to be explicit) and visit sites, fill forms etc.. If it gets stuck, it hands the session over to me so I can fill in forms and solve captchas manually. It can also write scripts, that means it can learn sites and then write its own automations for each specific site. This way it can notify me when a headphone I'm looking for gets discounted.

<figure class="video">
  <video src="/media/tamo-demo.mp4" poster="/images/give-computers-to-agents/tamo-demo-poster.jpg" width="706" height="900" controls muted loop playsinline preload="none"></video>
  <figcaption>I ask my agent to join the <a href="https://useboardless.com">useboardless.com</a> waitlist, and it does it for me using its own browser.</figcaption>
</figure>

With the free model I'm using it performs surprisingly well and looks like the bottleneck is not the LLM anymore, it is the systems they live on. It can be slow, but it isn't stupid. I like its replies, even when they take a few minutes. I set up a Telegram bot and we communicate over Telegram.

Agents can do almost anything on their own computers, so we need guardrails and sandboxes. But just like parenting, you cannot block all the features, you need to give the agent some freedom to experiment and fail.

With my new project I'm testing exactly that. I'm inviting my friends and family to test this new agent and we're experimenting. Good thing about testing it with other people is everyone interested in with different things. Some like to be reminded of what needs to be done and some wants to discover Wikipedia articles every day.

Since I use custom harness it is possible to do custom things like reflections at night when no one uses the agent. So agent reflects the day and take notes. It looks at its errors, tries to understand its user and their experience and habits. This takes us to the importance of memory with agents. A brand new agent with an empty memory won't perform at the level you expect. But as soon as you start to feed it with your specific data it performs the way you want and helps you discover yourself too. I think this also makes smaller models powerful. With the experiment I'm doing, my agent gets to know me and produce better responses.

I'm doing a similar experiment with an mcp for memory so all of my sessions will be aware of my common memory. This helps when I switch to phone or switch to another agent and etc..

It won't stop with computers, I think eventually we will give agents phones as well, I mean smartphones so they can interact with  apps too. Thats one thing on my list to add to my experiment. I'll connect a physical old android phone to the system and my agent will have access to the device as it wants, just like the browser.

When agents become proactive they can update themselves and improve the overall user experience. If I get similar mistakes and it discovers this problem it can fix itself and start working properly.

I'm hopeful about the near future because if we can do real work with small models that means it will become possible to host our own agents that will do real work. It will be a great use case for small businesses. It also might be an interesting future for the elderly because their day to day requirements might be handled by agents and probably with physical agents too. Elder care is a huge problem and will be a major expense for countries in the near future. This is the reason why I'm investing in building agents and developing them. And I'm offering agent development services to businesses for their custom needs. If you're looking for automating repetitive not core parts of your business, reach out to me and I'll build the agent for you, and I'll also maintain the agent so you don't have to think about it if it gets broken or stuck.

Soon, we'll be talking about giving agents robotic bodies...
