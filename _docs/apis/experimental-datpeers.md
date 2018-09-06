---
title: datPeers API
section: webAPIs
sectionUrl: /docs/apis
sectionTitle: Web APIs
sectionSubtitle: Explore Beaker's Web APIs for reading and writing the peer-to-peer filesystem
experimental: true
order: 5
---

`datPeers` is an experimental API for sending and receiving messages between peers on a given `dat://` website. It includes methods for attaching "session data" to your connection. This session data can be used to broadcast a username, profile URL, or other identifying information.

To use this API, include the following in your <a href="/docs/apis/manifest"><code>dat.json</code> manifest file</a>:

```json
{
  "experimental": {
    "apis": ["datPeers"]
  }
}
```

{% include experimental-api-notice.html %}

## Security and privacy

Users of the `datPeers` API should be conscious of its limited properties. This API is designed to be a minimal stopgap solution while better tools are developed. This "minimal design" is reflected by its limited privacy, security, and reliability.

With this API, you should expect:

 - **No privacy**. The messages and session data are not kept private on the network.
 - **No security**. The messages and session data could be modified by an intermediary.
 - **No reliability**. Messages may not reach their intended destination.

This API is experimental and temporary. We suggest you avoid any use-cases that depend on privacy or reliability.

## Methods

{% include api-reference.html items=site.data.apis.experimental-datpeers.methods %}

## Events

{% include api-reference.html items=site.data.apis.experimental-datpeers.events %}

## DatPeer

{% include api-reference.html items=site.data.apis.experimental-datpeers.datpeer %}