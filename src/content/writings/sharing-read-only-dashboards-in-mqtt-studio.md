---
title: "Sharing Read-Only Dashboards in MQTT Studio"
date: 2026-05-30
description: "Sharing read-only dashboards in MQTT Studio."
---

I continue to build the MQTT Studio and trying to get it to a state that I'll confidently
sell to my clients.

Doing a live demo is better than telling what the product can do, so just developed a new
feature that allows you to share a project publicly in read-only mode. It gives you a link
and that's all.

To define what features are required I'm building a dashboard for myself. It is a basic
project to monitor my indoor temperature and humidity currently. It uses an ESP-32 C3 Mini with
AHT10 humidity sensor. It is connected to my WiFi and connected to MQTT broker of my MQTT Studio
project.

You can see the public dashboard here 👇

[https://mqtt.studio/share/3e76bd4d476fa0a9b341a12bb4c98ecf](https://mqtt.studio/share/3e76bd4d476fa0a9b341a12bb4c98ecf)

![A read-only MQTT Studio dashboard showing live temperature and humidity widgets](/images/sharing-read-only-dashboards-in-mqtt-studio/dashboard.png)

You can start using it today, and I'm excited to hear what you think.
