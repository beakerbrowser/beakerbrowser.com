---
title: GlobalFetch API
section: webAPIs
sectionTitle: Web APIs
sectionSubtitle: Explore Beaker's Web APIs for reading and writing the peer-to-peer filesystem
experimental: true
order: 5
---

An experimental API for making Ajax calls across origins.

This API is functionally identical to [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with the following caveats:

 - CORS is not applied, so the site can send a request to any service
 - A permission prompt is raised for each request to a new origin
 - Currently only HEAD and GET are supported
 - Cookies/credentials are never sent

For each new origin that the site contacts, a permission prompt will be presented. This makes it possible for dat:// apps to make cross-origin requests, while the user still has an opportunity to block the requests.

## Lab API

This is a [Lab API](/docs/guides/using-lab-apis.md). You must opt into the API by including the following in your [dat.json](manifest.html):

```json
{
  "experimental": {
    "apis": ["globalFetch"]
  }
}
```

Lab APIs may change quickly or be removed in the future. You should not depend on a Lab API to always be available. By listing `"globalFetch"` in the `experimental.apis`, you acknowledge that you are using an experimental & temporary API.


## Methods

{% include api-reference.html items=site.data.apis.experimental-globalfetch.methods %}
