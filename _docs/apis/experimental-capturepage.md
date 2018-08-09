---
title: capturePage API
section: webAPIs
sectionUrl: /docs/apis
sectionTitle: Web APIs
sectionSubtitle: Explore Beaker's Web APIs for reading and writing the peer-to-peer filesystem
experimental: true
---

`experimental.capturePage` is an experimental API for capturing a screenshot of a page.

To use this API, include the following in your <a href="/docs/apis/manifest"><code>dat.json</code> manifest file</a>:

```json
{
  "experimental": {
    "apis": ["capturePage"]
  }
}
```

{% include experimental-api-notice.html %}

## Permissions

The user must grant permission for your app to use this API.

## Privacy

To avoid leaking sensitive user data in the screenshot, Beaker loads the page in a temporary private session. The screenshot will show no login state, visited links, or any other indicator of the user's past behaviors.

## Methods

{% include api-reference.html items=site.data.apis.experimental-capturepage.methods %}
