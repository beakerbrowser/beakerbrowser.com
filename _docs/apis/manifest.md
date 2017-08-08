---
title: Dat.json site manifest
section: webAPIs
sectionTitle: Web APIs
order: 5
---

Sites and applications served over `dat://` can include a manifest file to set metadata and configure the site/application/archive.
The file should be located at `/dat.json` in the root of the site.
Beaker automatically manages the manifest for archives created via the Dat Web API.

```json
{
  "url": "dat://4483a2..66/",
  "title": "Application Title",
  "description": "A short description of the app",
  "fallback_page": "/public/404.html",
  "web_root": "/public"
}
```

<hr class="nomargin">

{% include api-reference.html items=site.data.apis.manifest.attributes %}
