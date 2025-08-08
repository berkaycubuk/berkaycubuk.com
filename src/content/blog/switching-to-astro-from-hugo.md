---
title: Switching to Astro from Hugo
date: 22.04.2024
---

Here is another shiny tech switch blog post.

I'm using Hugo for a long time and loved the speed and simplicity of it. But it's time for a change and experimentation. I switched made the switch to [Astro](https://astro.build).

## My reasons

I want to land on a static site generator and stick with it for a long term, especially for client projects. Hugo's problem is finding people who understand it's syntax is hard, but most of the web people know Javascript (at least can code in it). I'm not saying what Hugo does is wrong, it's just not popular around the community. Also another plus of Astro, it really support components. In Hugo partials are not real components and sometimes they become a huge chunk of Egyptian hieroglyphs.

Another plus that I saw with Astro is server side rendering for simple tasks. With SSR authentication becomes possible and it's great for some use cases that you don't want to build fully working server side programs. And it does not forces you on a frontend framework, you can just use plain HTML and Javascript with Astro flavour. SvelteKit looked promising but their breaking changes did not gave me production level trust.

## Migration experience

It went all smooth. It was so smooth, that I just had time to changed overall design of the site. Content migration is easy due to markdown support. Deployment is all the same.

## Conclusion

Overall, I loved the end result and not thinking to go back to Hugo for a while. But still Hugo has a special place in my heart :^)
