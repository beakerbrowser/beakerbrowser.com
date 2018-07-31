---
title: Use a custom 404 page
sectionUrl: /docs/guides
sectionTitle: Guides
section: guides
author: Tara Vancil
authorAvatar: /img/team/taravancil.jpg
authorLink: https://taravancil.com
description: Learn how to set a custom 404 page for dat:// websites in the Beaker Browser
---

Beaker renders a default 404 page when you navigate to a page that can't be found:

<img src="/img/docs/guides/not-found.png" />

You can set a custom 404 page by updating the [`fallback_page`](/docs/apis/manifest#fallback-page) property in your website's [manifest file](/docs/apis/manifest):

<figcaption class="code">dat.json</figcaption>
```json
{
  "fallback_page": "404.html"
}
```

Now when you navigate to a non-existent page, `404.html` will be rendered instead of Beaker's default page.

## Further reading

- [dat.json documentation](/docs/apis/manifest)
- [Guide: Updating dat.json with `configure()`](TODO)