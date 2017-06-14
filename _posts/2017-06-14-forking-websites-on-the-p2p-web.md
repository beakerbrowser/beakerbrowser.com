---
layout: post
title: Forking websites on the peer-to-peer Web
author: Tara Vancil
authorLink: https://twitter.com/taravancil
avatar: /img/team/taravancil.jpg
image: /img/posts/forking-sites/thumbnail.png
excerpt: |
  We love services like GitHub, Codepen, and Glitch, for providing tools to share, duplicate, and remix other people’s projects. What if instead of being part of a one-off service, these tools were a core feature of the Web platform?
---

One of the most interesting phenomena on the Web is the popularity of services like [GitHub](https://github.com), [CodePen](https://codepen.io), and [Glitch](https://glitch.com), which provide tools for sharing, duplicating, and remixing other people’s projects. The practice of learning from and using existing code as boilerplate is a critical piece of what’s made innovation on the Web platform so open.

We love these tools, and think they provide an amazing service, but what if instead of being part of a one-off service, they were a core feature of the Web platform?

In Beaker, they are.

## Open-source websites

Beaker uses [Dat](/docs/inside-beaker/dat-files-protocol.html), a peer-to-peer protocol for distributing and delivering websites and files. So when you visit a website in Beaker, the Dat protocol makes it possible to download every file that composes the website.

This presents an interesting opportunity, which is that you can make an editable copy of those files, make changes, then publish your changes across the network.

<aside class="highlight">
  <em>Read more: <a href="/2017/06/07/view-source-peer-to-peer.html">View source on the peer-to-peer Web</a></em>
</aside>

## Forking websites in Beaker

In Beaker when you visit a peer-to-peer website hosted with the Dat protocol, you can fork that website, and save an editable version of it on your device.

<figure>
<img src="/img/posts/forking-sites/thumbnail.png">
</figure>

Once you’ve forked a peer-to-peer website, you can modify it as much or as little as you'd like! For example, if you were using a peer-to-peer social media application, you could fork the original app to modify its tools for muting users, or even just to create a new decorative skin for your profile.

We’re really excited about the potential of forking being a core feature of the Web platform. In the future, we’ll talk about the P2P + Services stack, and explain how modern applications can be built without a hard dependency on remote hosts and data silos. In the meantime, you can read more on the topic in [Paul Frazee's post on achieving scale on the peer-to-peer Web](https://pfrazee.github.io/blog/achieving-scale).