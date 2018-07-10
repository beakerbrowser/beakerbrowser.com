---
title: datPeers API
section: webAPIs
sectionTitle: Web APIs
sectionSubtitle: Explore Beaker's Web APIs for reading and writing the peer-to-peer filesystem
experimental: true
order: 5
---

An experimental API for sending and receiving messages with peers on a website. Only works on a dat:// site.

The `datPeers` API includes methods for attaching "session data" to your connection. This session data can be used to broadcast a username, profile url, or other identifying information.

## Lab API

This is a "Lab API." You must opt into the API by including the following in your [dat.json](manifest.html):

```json
{
  "experimental": {
    "apis": ["datPeers"]
  }
}
```

Lab APIs may change quickly or be removed in the future. You should not depend on a Lab API to always be available. By listing `"datPeers"` in the `experimental.apis`, you acknowledge that you are using an experimental & temporary API.

## Security and privacy

Users of the datPeers API should be conscious of its limited properties. This API is designed to be a minimal stopgap solution while better tools are developed. This "minimal design" is reflected by the limited privacy, security, and reliability.

With this API, you should expect:

 - **No privacy**. The messages and session data are not kept private on the network.
 - **No security**. The messages and session data could be modified by an intermediary.
 - **No reliability**. Messages may not reach their intended destination.

This API is temporary. We suggest you avoid any use-cases that depend on privacy or reliability.

## Methods

{% include api-reference.html items=site.data.apis.experimental-datpeers.methods %}

## Events

{% include api-reference.html items=site.data.apis.experimental-datpeers.events %}

## DatPeer

{% include api-reference.html items=site.data.apis.experimental-datpeers.datpeer %}