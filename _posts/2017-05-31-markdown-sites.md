---
layout: post
title: Building Markdown sites with Beaker
author: Tara Vancil
authorLink: https://twitter.com/taravancil
avatar: /img/team/taravancil.jpg
---

We're big fans of
[Markdown](https://daringfireball.net/projects/markdown/syntax), so we've built
in support for Markdown formatting to Beaker.

Markdown rendering is turned on by default for all `.md` files, but you can easily switch between the raw and formatted file content.


<figure>
  <img src="/img/blog/markdown.jpg"/>
  <figcaption>Formatted Markdown vs. raw Markdown in Beaker</figcaption>
</figure>

## Building Markdown websites

Since all `.md` files are rendered with Markdown formatting, in Beaker, it's quick and easy to publish documents like blog posts and documentation without writing any markup.

To get started: simply add an an `index.md` file to your project:

```
# Hello world!

This is my **cool** Markdown site published with Beaker.
```

### Navigation

We've also added a feature for quickly creating a navigation menu for your Markdown website.

To add navigation, simply add a `nav.md` file to your project with a list of links:

```
[About me](about.md)
[My blog](blog.md)
```

Once you've added a `nav.md` file, Beaker will render the
navigation menu on all of Markdown pages in your project.

<figure>
  <img src="/img/blog/markdown-nav.jpg" />
  <figcaption>
    A Markdown site with navigation
  </figcaption>
</figure>

### Custom styles and formatting

Beaker's navigation styling is intentionally bare — but it doesn't have to stay
that way! You can add inline styles to any `.md` file:

```
[About me](about.md)
[My blog](blog.md)

<style>
  body {
    color: red;
  }
</style>
```

Alternatively, you can add a `.css` file to your project and load it as a
stylesheet:

```
[About me](about.md)
[My blog](blog.md)

<link rel="stylesheet" href="style.css">
```

Markdown sites are a convenient way to publish formatted content with Beaker
without setting up tools to build the site for you. You can keep it simple, or
customize the formatting as much as you'd like!
