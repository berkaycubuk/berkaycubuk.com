---
title: "My e-mails are now fully mine"
date: 2021-07-27T17:07:40+03:00
---

Recently I managed to run my own mail server. It was a good thing to learn how e-mails work and also good to take back your privacy. Right now I can send and receive e-mails without asking Google, Microsoft or Yahoo.

## Tools I'm using
- Thunderbird: Graphical mail client
- K9: Android mail client
- Postfix: to send and receive mail
- Dovecot: to get mail to client (Thunderbird and K9)
- Spamassasin: prevent spam
- OpenDKIM: validate mails to send popular sites
- OpenSSL: free SSL certificate

To setup all these stuff I used [Luke Smith's](https://lukesmith.xyz/) [emailwiz](https://github.com/LukeSmithxyz/emailwiz) script. It's simple to install, you just have to follow the installation steps.

## But why? Why not use Gmail?

There are a lot of normal people who uses gmail on a daily basis. And I understand them, it just works, why to change it?

First of all, gmail is storing all your mails in the data center, that you don't know where it is. And you cannot access all the data about you. Also if someday gmail somehow disappears your whole life will be upside down because you connected all your important stuff to your gmail account.

You can ask, "If Google fails, how do you think I'm not gonna fail?"

That's true, managing your server is not an easy job, it can fail anytime. But, you can access all of your data and back it up in seconds. And your mail will be registered under your domain so, in someday if you change your server or provider you'll still continue to use the same mail address you used before.

What about ProtonMail?

ProtonMail look's secure than the gmail. But, the issue continues, you're still dependent on a somebody or some company.