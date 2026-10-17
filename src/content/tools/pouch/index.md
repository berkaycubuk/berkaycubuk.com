---
title: "pouch"
icon: "/images/tools/pouch.svg"
description: "Run Claude Code from your phone. A self-hosted, phone-first web app for the sessions on your own machine."
---

Claude Code, in your pocket. pouch is a phone-first web app for the Claude Code sessions
on your own machine. Start a task from anywhere, approve tool calls from a notification,
read the diff, and pick the same session up in a terminal later.

## Try it

- [pouch.berkay.tools](https://pouch.berkay.tools)

## Features

- **Dashboard** — every session on the box in one list, with the ones waiting on you at
  the top.
- **Approve from the lock screen** — tool calls the classifier can't settle arrive as a
  push notification with Approve and Deny on it.
- **Answer with a tap** — when Claude asks which way to go, its options show up as buttons.
- **Read the diff** — uncommitted changes, one file per screen.
- **Resume anywhere** — every session is a normal Claude Code session, so
  `claude --resume` picks it up in a terminal.
- Real terminals, project management, image attachments, and installable as an app.

## Security

pouch runs on your machine with your own Claude Code login — no accounts, no hosted
service in the middle. The API is guarded by a login token, and it's meant to be served
over a private network like Tailscale or behind Cloudflare Access.

## Install

Needs Node 22+, pnpm, git and Claude Code on Linux or macOS.

```bash
git clone https://github.com/berkaycubuk/pouch.git && cd pouch
pnpm install
pnpm start
```

- [Source on GitHub](https://github.com/berkaycubuk/pouch) (MIT)

## Support

Found a bug or have feedback? Send me an e-mail: berkay@berkaycubuk.com
