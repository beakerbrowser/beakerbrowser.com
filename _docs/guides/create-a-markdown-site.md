---
title: Build a website with Markdown
section: guides
sectionUrl: /docs/guides
sectionTitle: Guides
author: Tara Vancil
authorAvatar: /img/team/taravancil.jpg
authorLink: https://taravancil.com
description: We’re big fans of Markdown, so we added support for Markdown rendering in Beaker. Markdown rendering is...
---

We’re big fans of [Markdown](https://daringfireball.net/projects/markdown/syntax), so we added support for Markdown rendering in Beaker.

Markdown rendering is turned on by default for all `.md` files, but you can easily switch between the raw and formatted file content:

<img src="/img/docs/guides/markdown-rendering.png" />

## Getting started with Markdown

Since Beaker renders `.md` files out-of-the-box, we can use Markdown to quickly and easily publish documents like blog posts or documentation without writing any HTML.

To get started, add an an `index.md` file to your project:

<figcaption class="code">index.md</figcaption>
```markdown
# Hello world!

This is my **cool** Markdown site published with Beaker.
```

<img src="/img/docs/guides/markdown-index.png" />

## Navigation

Beaker also supports a basic Markdown-based navigation menu. To add navigation, add a `nav.md` file to your project:

<figcaption class="code">nav.md</figcaption>
```markdown
[About me](about.md)
[My blog](blog.md)
```

Once you've added a `nav.md` file, Beaker will render the
navigation menu on all `.md` pages in your project:

<img src="/img/docs/guides/markdown-nav.png"/>

## Custom styles

Beaker's default Markdown styles are intentionally bare, but it doesn't have to stay that way! You can add inline styles to any `.md` file:

<figcaption class="code">index.md</figcaption>
```markdown
# Hello world!

This is my **cool** Markdown site published with Beaker.

<style>
  body {
    color: red;
  }
</style>
```

You can also add a CSS file to your project and load it as a stylesheet:

<figcaption class="code">index.md</figcaption>

```markdown
# Hello world!

This is my **cool** Markdown site published with Beaker.

<link rel="stylesheet" href="style.css">
```

Markdown sites are a convenient way to publish formatted content with Beaker
without setting up a build process to convert Markdown files to HTML. You can keep it simple or customize the formatting as much as you'd like!
