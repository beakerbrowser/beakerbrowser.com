---
title: Overview
section: howBeakerWorks
sectionTitle: How Beaker works
order: 1
---

Beaker is a peer-to-peer browser for the Web of the future. With built-in tools
for building and exploring the peer-to-peer Web, Beaker is more than just your
typical Web browser:

- One-click website publishing
- No-nonsense filesharing
- APIs for building decentralized applications
- Live reloading, offline sync, and more

## What's the peer-to-peer Web?

The peer-to-peer Web is a loose term for websites and applications that
are hosted with a <a href="https://en.wikipedia.org/wiki/Peer-to-peer">
peer-to-peer network</a> instead of
<a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol">HTTP</a>.

<div class="columns">
  <figure class="col col-1-3">
    <img src="/img/icon/p2p-protocol.svg"/>
  </figure>

  <div class="col-2-3">
    <p>
      There are many peer-to-peer protocols, each with subtle differences, but
      they all share a few core properties:
    </p>

    <ul>
      <li>Files are downloaded directly from peers on the network</li>
      <li>Downloaders can become uploaders, contributing bandwidth and storage to help host files</li>
      <li>Files are addressed with cryptographic identifiers, making it safe to download data from untrusted peers</li>
    </ul>
  </div>
</div>

If you've ever used Spotify or
[BitTorrent](https://en.wikipedia.org/wiki/bittorrent), then you've probably
used a peer-to-peer protocol!

### Peer-to-peer protocols and Beaker

Beaker uses a peer-to-peer protocol called [Dat](https://datproject.org) to host
websites, files, apps, and any other type of file you can imagine!

<aside>
  TODO link to a bunch of dat resources for the ppl who want to look at it right away
</aside>

## How is Beaker different from other browsers?

With Beaker you can browse `http://` and `https://` websites just as you'd expect,
and Beaker's browsing interface should feel comfortable and familiar.

Beaker is unique because it provides browsing support for `dat://` URLs, and
provides [new Web APIs](/docs/apis/dat) for building peer-to-peer websites and
applications.

Read next: <a href="todo">peer-to-peer websites</a>
