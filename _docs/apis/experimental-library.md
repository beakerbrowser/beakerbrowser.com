---
title: Library API
section: webAPIs
sectionTitle: Web APIs
sectionSubtitle: Explore Beaker's Web APIs for reading and writing the peer-to-peer filesystem
experimental: true
order: 5
---

An experimental API for managing the user's collection of Dat archives.

## Lab API

This is a [Lab API](/docs/guides/using-lab-apis.html). You must opt into the API by including the following in your [dat.json](manifest.html):

```json
{
  "experimental": {
    "apis": ["library"]
  }
}
```

Lab APIs may change quickly or be removed in the future. You should not depend on a Lab API to always be available. By listing `"library"` in the `experimental.apis`, you acknowledge that you are using an experimental & temporary API.

## Permissions

The user must grant permission for your app to use this API.

If you only wish to add & remove items to/from the library, consider using [requestAdd()](#requestadd) and [requestRemove()](#requestremove) so that the user can review each addition and removal individually.

## Methods

{% include api-reference.html items=site.data.apis.experimental-library.methods %}

## Events

{% include api-reference.html items=site.data.apis.experimental-library.events %}