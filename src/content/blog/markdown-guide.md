---
title: Markdown Guide
date: 2020-11-16
date_updated: 2021-02-11T19:07:08.000Z
---

## What is Markdown?

Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by **John Gruber** and **Aaron Swartz**.

It's basically helping us to create rich structured and lighweight text files without special software or editor. You can create your own markdown document with a notepad or any text editor. To create markdown file you have to give it **.md** extension.

## Markdown Basics

### Headings

We have 6 different headings in HTML. First one the biggest, last one is the smallest. We're using `#` to start using heading. To change it's level we can add more `#`.
MarkdownDescriptionHTML equivalent`# Heading 1`Biggest heading`<h1>Heading 1</h1>``## Heading 2`2. heading and going smaller`<h2>Heading 2</h2>``### Heading 3 `3. heading`<h3>Heading 3</h3>``#### Heading 4`4. heading`<h4>Heading 4</h4>``##### Heading 5`5. heading`<h5>Heading 5</h5>``###### Heading 6`Smallest heading`<h6>Heading 6</h6>`
*Please make sure you give enough space between # and the heading name.*

### Paragraphs

Just type what you want to display as paragraph.
MarkdownDescriptionHTML equivalent`Paragraph 🙂`Simple paragraph in markdown`<p>Paragraph 🙂</p>`
### Bold

We can make some part of text **bold**.
MarkdownHTML equivalent`Text with **bold** text``Text with <strong>bold</strong> text``Test with __bold__ text``Text with <strong>bold</strong> text`
In HTML, you can also use `<b></b>` for bold.

### Italic
MarkdownHTML equivalent`Text with *italic* text``Text with <i>italic</i> text``Text with _italic_ text``Text with <i>italic</i> text`
In HTML, you can also user `<em></em>` for italic.

### Blockquotes
MarkdownHTML equivalent`> Happiness depends upon ourselves.``<blockquote>Happiness depends upon ourselves.</blockquote>`
### Lists

We can organize items using lists.

#### Ordered Lists
MarkdownHTML`1. First item``<ol><li>First item</li></ol>`
I don't like this explanation so the next one will be better.

    ## Popular code editors
    
    1. VsCode
    2. Vim
    3. Sublime Text
    4. Atom
    

#### Unordered Lists
MarkdownHTML`- First item``<ul><li>First item</li></ul>``* First item``<ul><li>First item</li></ul>``+ First item``<ul><li>First item</li></ul>`
### Images

We can display images with markdown.
MarkdownHTML`![alt text](image url)``<img src="image url" alt="alt text" />`
### Code

We can display code blocks with unique syntax highligting.
MarkdownHTML````print "Hello World" `````<code>print "Hello World"</code>`
To define language you can add the language name after the first `````. For example:

    ```php
    
    echo "Hello World";
    
    ```
    

### Links
MarkdownHTML`Go to [Google](https://google.com)``Go to <a href="https://google.com">Google</a>`
#### References

- [https://en.wikipedia.org/wiki/Markdown](https://en.wikipedia.org/wiki/Markdown)
- [https://www.markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/)
