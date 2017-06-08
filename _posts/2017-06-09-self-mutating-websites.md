---
layout: post
title: Self-mutating websites
author: Paul Frazee
authorLink: https://twitter.com/pfrazee
avatar: /img/team/pfrazee.jpg
image: /img/posts/self-mutating-websites/thumbnail.png
---

In [Beaker 0.7.2](/2017/06/05/beaker-0-7-2.html), we made policy updates that enable an application-model we call "Self-mutating websites." In this post, I'll explain what they are and how to get the most out of them.

## What are self-mutating websites?

### What are self-mutating websites?

self-mutating websites are [Dat](/docs/inside-beaker/dat-files-protocol.html) sites that modify their own files.

For a new visitor, a self-mutating site would be read-only. To make changes, the visitor would [fork the site](/docs/using-beaker/forking-sites.html), making an editable copy. The new fork would then be able to write to itself.

<figure>
<img src="/img/posts/self-mutating-websites/self-mutation.gif">
<figcaption>The visitor forks the site, making an editable copy. The new fork then writes to itself.</figcaption>
</figure>

In the example above, the site writes to its own index.html to persist its changes.

## How do self-mutating websites work?

Self-mutating websites are [dat websites](/docs/using-beaker/the-peer-to-peer-web.html) which use the [`DatArchive` Web API](/docs/apis/dat.html) to modify their own files. These modifications can include anything from storing user-data to modifying the application's own code.

Self-mutation is a very convenient way to do personal storage and publishing, eg with a Wiki or Todo list. The application would write any user-data to its own site-archive, storing the data for the long term, and making it possible to share that data over the network.


## How can I build a self-mutating site?

The fastest way to get started is to [visit this example application](dat://6ef097c861c8c1857aefa9b2e9700d3061955d4552c492ab1e3f69ca77fdcba7) and view the source, or [fork it](TODO) to create your own copy to build with. This app includes everything you need to know to build a self-mutating website.