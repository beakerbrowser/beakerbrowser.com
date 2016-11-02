---
title:    App Manifest
category: Web APIs
order:    1
---

Sites and applications served over `dat://` can include a manifest file to set metadata and configure the application.

The file should be located at `/dat.json` in the root of the site.

<ul class="doc-toc">
  <li>App Manifest {% include api-links.html items=site.data.apis.manifest.attributes %}</li>
</ul>

```json
{
  "title": "Application Title",
  "description": "A short optional description of the application",
  "author": "Bob Roberts <bob@roberts.com>"
}
```

{% include api-reference.html items=site.data.apis.manifest.attributes %}