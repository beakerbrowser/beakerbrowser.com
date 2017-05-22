---
title: Create a markdown site
section: tutorials
sectionTitle: Tutorials
order: 2
---

Because we’re huge fans of [Markdown], we included Markdown rendering in Beaker.

You can create a markdown site very easily. First, [create a new site]. Then, add an `index.md`, like this:

```markdown
# Hello world

This is my **cool** markdown site!
```

You can open the site, and you should see a page like this:

[TODO screenshot]

Any file with a `.md` extension will be rendered. For instance, `page.md`:

```markdown
# A Page

This is another page
```

For convenience, Beaker also supports a `/nav.md` file, which is automatically inserted into each page to provide a navigation:

```markdown
[Home](/)
[A Page(/page.md)
```

[TODO screenshot]

You can use markdown sites as a quick way to publish documentation, or even for a personal site. Markdown supports HTML tags as well, so you can apply custom styles, scripts, and elements.