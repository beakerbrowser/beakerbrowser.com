---
title: What's the peer-to-peer Web?
section: howBeakerWorks
sectionTitle: How Beaker works
order: 1
---

<p class="accent">
  The <em>peer-to-peer Web</em> is a loose term for websites and apps that are transported with a <a href="https://en.wikipedia.org/wiki/Peer-to-peer">peer-to-peer protocol</a> instead of <a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol">HTTP</a>.
</p>

There are many peer-to-peer (p2p) protocols with subtle differences, but they share some important properties:

- Files are not bound to any one IP address or server
- You download files from other people on the network
- Anyone can become an uploader (or seeder), contributing bandwidth to help host files

## Peer-to-peer protocols and Beaker

We call Beaker a p2p browser because it supports a p2p protocol called [Dat](https://datproject.org) (`dat://`). Adding `dat://` support in the browser made it possible for Beaker to provide experimental new features:

- Publishing websites and files from the browser, no server required
- [APIs](/docs/apis) for building p2p apps
- Powerful View Source and in-browser editor
- Live reloading, offline sync, and more

{% include dat-aside.html %}

## How is Beaker different from other browsers?

Beaker is unique because it provides browsing support for `dat://` URLs, and provides [new Web APIs](/docs/apis/) for building p2p websites and applications.

<img src="/img/docs/tour/dat-site.png"/>

You can also browse `http://` and `https://` websites with Beaker, and Beaker's browsing interfaces should feel comfortable and familiar.

Read next: <a href="/docs/how-beaker-works/peer-to-peer-websites">peer-to-peer websites</a>
