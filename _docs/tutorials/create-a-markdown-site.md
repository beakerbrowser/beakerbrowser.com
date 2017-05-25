---
title: Create a markdown site
section: tutorials
sectionTitle: Tutorials
order: 2
---

We're huge fans of [Markdown](https://daringfireball.net/projects/markdown/syntax), so we included Markdown rendering in Beaker. Creating a markdown site is easy. First, [create a new site](/docs/using-beaker/create-a-site.html). Then, add an `index.md`:

<figcaption class="code">/index.md</figcaption>
```
# Hello world

This is my **cool** markdown site!
```

When you open the site, you'll see the markdown is rendered as html.

<figure>
<img data-src="/img/docs/tut-create-a-markdown-site/index.md.jpg" >
<figcaption>The index.md will be rendered as html</figcaption>
</figure>

Any file with a `.md` extension will be rendered. For instance, `page.md`:

<figcaption class="code">/page.md</figcaption>
```
# A Page

This is another page
```

## Nav.md

For convenience, Beaker also supports a `/nav.md` file:

<figcaption class="code">/nav.md</figcaption>
```
[Home](/)
[A Page](/page.md)
```

The content of `/nav.md` is automatically inserted into each page to provide navigation.

<figure>
<img data-src="/img/docs/tut-create-a-markdown-site/with-nav.jpg" >
<figcaption>The index.md with a nav.md file</figcaption>
</figure>

You can use markdown sites as a quick way to publish documentation, or even for a personal site. Markdown supports HTML tags as well, so you can apply custom styles, scripts, and elements.