---
title: dat.json site manifest file
section: webAPIs
sectionTitle: Web APIs
sectionSubtitle: Explore Beaker's Web APIs for reading and writing the peer-to-peer filesystem
order: 5
---

Websites and applications served over `dat://` can include a manifest file to
specify metadata and configure special behaviors.

The file must be located at `/dat.json` in the website or application root.

Beaker automatically creates and manages the manifest for Dat archives created
with the `DatArchive` Web API.

Example:

<figcaption class="code">dat.json</figcaption>
```json
{
  "url": "dat://4483a2..66/",
  "title": "My website",
  "description": "A simple website built with the Beaker Browser",
  "fallback_page": "/public/404.html",
  "web_root": "/public"
}
```

{% include api-reference.html items=site.data.apis.manifest.attributes %}

