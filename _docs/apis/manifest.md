---
title: dat.json
section: webAPIs
sectionUrl: /docs/apis
sectionTitle: Web APIs
sectionSubtitle: Explore Beaker's Web APIs for reading and writing the peer-to-peer filesystem
---

<p class="accent">
  Websites and applications served over <code>dat://</code> can include a manifest file to specify metadata and configure special behaviors. The file must be located at <code>/dat.json</code> in the website or application root.
</p>

Beaker automatically creates and manages the manifest for Dat archives created
with the `DatArchive` Web API.

Example:

<figcaption class="code">dat.json</figcaption>
```json
{
  "title": "My website",
  "description": "A simple website built with the Beaker Browser",
  "type": ["website"],
  "links": {
    "license": [{
      "href": "http://creativecommons.org/licenses/by-nc/2.5/",
      "title": "CC BY-NC 2.5"
    }]
  },
  "fallback_page": "/404.html",
  "web_root": "/public",
  "content_security_policy": "default-src 'self'",
  "experimental": {
    "apis": ["datPeers", "globalFetch", "library"]
  }
}
```

{% include api-reference.html items=site.data.apis.manifest.attributes %}

