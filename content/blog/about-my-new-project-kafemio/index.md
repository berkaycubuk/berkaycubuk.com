---
title: "About My New Project Kafemio"
date: 2021-03-25T07:24:09+03:00
---

I started to code this project just one month ago, and it's going good. But I already have a idea for this project before the covid.

## What is Kafemio?

Kafemio is cafe management software. Unlike it's competitors, it's open-source, web based and doesn't require special equipment. Main goal is creating something cheap & accessible for small cafes. They can use this software with their laptops, tablets and phones. Device requirements are simple; it's needs to connect internet and it's need to run modern browsers like chrome, firefox etc...

Let's talk about money. If users will host the project on their own, the price is free. If they don't want to manage it on theirself, we will manage the software and server for they. And the price will be 20$/month (it's opening price, it can change in time). Another cool thing about this project is, you don't have to pay some money upfront. It's like spotify for cafes, you can leave it whenever you want.

Ok, now we can talk some technical stuff. There two main packages for the project, server and client. I created the server using [Node.js](https://nodejs.org/en/) with Typescript. I know Node.js for this kind of realtime application can be bad, I know Go is better for this kind of application. I just wanted to create an MVP, that's why I choose Node.js, but after some releases I can switch to Go for better performance. For database, Kafemio uses [MongoDB](https://www.mongodb.com/) to store all the data.

How client works? Client is written in [React](https://reactjs.org/) with Typescript. React is cool, popular and not that bad. To speed up the process I choosen [Material UI](https://material-ui.com/) for the ui components. For state management I'm not using redux (it's complicated and I don't like it.), I kinda liked [zustand](https://zustand.surge.sh/) so we're using zustand.

Most people don't care but I take privacy serious. Right now we're only storing one cookie for the access token. And we're trying to collect only required data about you. It's open-source so, you can use the app comfortably than other enterprise things.

Documentation is important and when you start from scratch it's easy to documentate stuff. Right now for documentation I'm using [vuepress](https://vuepress.vuejs.org/), it's simple and easy to use.

Supported languages, you know as always English and for my local friends Turkish. But it's focused on English, after developing more I'm planning to add more languages.

You can learn more about Kafemio on [kafemio.com](https://kafemio.com). All the source code will available on [GitHub](https://github.com/Kafemio) when I finish the first version.