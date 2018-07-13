---
title: CapturePage API
section: webAPIs
sectionTitle: Web APIs
sectionSubtitle: Explore Beaker's Web APIs for reading and writing the peer-to-peer filesystem
experimental: true
order: 5
---

An experimental API for capturing a screenshot of a page.

## Security

To avoid leaking user information, Beaker loads the page in a temporary private session. The screenshot will show no login state, visited links, or any other indicator of the user's past behaviors.

## Lab API

This is a [Lab API](/docs/guides/using-lab-apis.md). You must opt into the API by including the following in your [dat.json](manifest.html):

```json
{
  "experimental": {
    "apis": ["capturePage"]
  }
}
```

Lab APIs may change quickly or be removed in the future. You should not depend on a Lab API to always be available. By listing `"capturePage"` in the `experimental.apis`, you acknowledge that you are using an experimental & temporary API.

## Methods

{% include api-reference.html items=site.data.apis.experimental-capturepage.methods %}
