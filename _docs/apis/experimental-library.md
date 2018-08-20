---
title: Library API
section: webAPIs
sectionUrl: /docs/apis
sectionTitle: Web APIs
sectionSubtitle: Explore Beaker's Web APIs for reading and writing the peer-to-peer filesystem
experimental: true
---


Beaker's `Library` API is an experimental API for managing the user's collection of Dat archives. [Learn more about Beaker's Library](#TODO)

To use this API, include the following in your <a href="/docs/apis/manifest"><code>dat.json</code> manifest file</a>:

```json
{
  "experimental": {
    "apis": ["library"]
  }
}
```

{% include experimental-api-notice.html %}

## Permissions

The user must grant permission for your app to use this API.

If you only wish to add and remove items to/from the Library, consider using [requestAdd()](#requestadd) and [requestRemove()](#requestremove) so that the user can review each addition and removal individually.

## Methods

{% include api-reference.html items=site.data.apis.experimental-library.methods %}

## Events

{% include api-reference.html items=site.data.apis.experimental-library.events %}