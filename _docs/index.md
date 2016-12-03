---
title: Beaker Browser
short_title: Introduction
order: 1
---

Beaker is a **Peer-to-Peer Web Browser.**
It is an active FOSS experiment, designed for site-creators and app-hackers to build websites as a community.
Anybody can be a server, and hosting is free, because it's P2P.

<div class="screenshot">
  <div><img src="/img/intro-screenshot-2-cropped.png"></div>
  <div>Hosting is immediate and free.</div>
</div>

Beaker mixes concepts from BitTorrent into the Web.
Anybody can publish a site immediately, independently, and for free.

As the tooling matures, we'll create Public Peer services for reliable cloud hosting.
The public peers will be optional, and, because the network is P2P, there's no lock-in.
You can switch cloud-hosts quickly, or go back to self-hosting, without anybody ever noticing.

<div class="screenshot">
  <div><img src="/img/intro-screenshot-4-cropped.png"></div>
  <div>Sites can be saved for offline.</div>
</div>

The P2P network lets users create decentralized, hostless applications.
Data is stored on the user's device and published on the network, so users stay in control of their content.

Rather than publishing content to somebody else's site, the apps can allocate and publish new sites at no cost.
There's no binding between the content and the web application, so you can publish with one site, and then switch to another at any time.

<div class="screenshot">
  <div><img src="/img/intro-screenshot-3-cropped.png"></div>
  <div>You can fork any site.</div>
</div>

With forking, you can modify any site, and deploy it instantly.
Our hope is to create a community of social hacking, where users can freely modify FOSS software and share their work.
It will be weird, chaotic, and creative -- and it might actually be useful, too!

Beaker was forked from Chrome.
It is free and open-source.

**Further Reading: [The Dat P2P Protocol](/docs/dat/intro.html)**

<a class="btn btn-primary" href="https://download.beakerbrowser.net/download/latest/osx"><i class="fa fa-apple" aria-hidden="true"></i> Download for Mac</a>
&nbsp; <a href="https://github.com/beakerbrowser/beaker">View the Source</a>

<hr>

Beaker supports the [Dat Protocol](/docs/dat/intro.html) under the `dat://` scheme, and the [IPFS Protocol](https://ipfs.io) under the `fs:/` scheme.
Dat is built-in, and will run automatically at startup.
IPFS requires the daemon to be active to run.