---
title: Using experimental APIs
section: guides
sectionUrl: /docs/guides
sectionTitle: Guides
author: Paul Frazee
authorLink: https://pfrazee.hashbase.io
authorAvatar: /img/team/pfrazee.jpg
description: Learn how to use the Beaker Browser's experimental APIs 
---


Beaker provides several experimental APIs for building applications. These APIs are still in development and are <strong>not stable</strong>.

Beaker exposes experimental APIs under `experimental.*`:

```js
experimental.datPeers.broadcast({hello: 'world'})
experimental.library.list({isSaved: true})
experimental.globalFetch('dat://beakerbrowser.com')
experimental.capturePage('dat://beakerbrowser.com')
```

## Opting-in with `dat.json`

Because experimental APIs are not stable and can change at any time, Beaker requires you to opt-in explicitly in order to use them in your website or application. To opt-in to using an experimental API, edit your [`dat.json`](/docs/apis/manifest.html) to indicate which APIs you'd like to use:

<figcaption class="code">dat.json</figcaption>
```json
{
  "experimental": {
    "apis": ["datPeers", "globalFetch", "capturePage", "library"]
  }
}
```

## Available APIs

* [`experimental.datPeers`](/docs/apis/experimental-datpeers)
  * Send and receive messages between peers
* [`experimental.library`](/docs/apis/experimental-library)
  * Request access to active user's collection of Dat archives
* [`globalFetch`](/docs/apis/experimental-globalfetch.html)
  * Make Ajax calls outside of CORS restrictions
* [`capturePage`](/docs/apis/experimental-capturepage.html)
  * Take a screenshot of a page

## How stable are experimental APIs?

Experimental APIs are **not stable**. You should expect all experimental APIs to change or even be removed. You should expect the following changes:

 - **Modifications**. Lab APIs will change as we learn more about how they work.
 - **Deprecations**. Lab APIs may be removed in favor of alternatives.
 - **Stabilizations**. Lab APIs may simply be accepted as stable Web APIs, at which point they will no longer be exposed on the `experimental.*` object.

The Beaker team will do its best to minimize the impact of changes and to keep you informed about changes when they occur.

## Further reading

- [API reference](/docs/apis/)
