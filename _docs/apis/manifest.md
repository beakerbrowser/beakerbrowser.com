---
title:    App Manifest
category: Web APIs
order:    1
---

Sites and applications served over `dat://` can include a manifest file to set metadata and configure the application.
The file should be located at `/dat.json` in the root of the site.
Beaker automatically manages the manifest for archives created via the Dat Web API.

```json
{
  "url": "dat://4483a2..66/",
  "version": "1.2.3",
  "title": "Application Title",
  "description": "A short description of the app",
  "author": "Bob Roberts <bob@roberts.com>",
  "forkOf": ["dat://00fdc3..7a/"],
  "createdBy": {
    "title": "My Dat App",
    "url": "dat://15f17e..6a/"
  }
}
```

<hr class="nomargin">

{% include api-reference.html items=site.data.apis.manifest.attributes %}