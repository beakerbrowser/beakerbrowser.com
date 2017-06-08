---
layout: post
title: Self-mutating websites
author: Paul Frazee
authorLink: https://twitter.com/pfrazee
avatar: /img/team/pfrazee.jpg
image: /img/posts/self-mutating-websites/thumbnail.png
---

In [Beaker 0.7.2](/2017/06/05/beaker-0-7-2.html), we made policy updates that enable an application model we call "Self-mutating websites." In this post, I'll explain what they are and how to get the most out of them.

## What are self-mutating websites?

Self-mutating websites are [Dat](/docs/inside-beaker/dat-files-protocol.html) websites that can modify their own files.

When you first visit a self-mutating website, it's in read-only mode. In order to make changes,
you'd need to [fork the site](/docs/using-beaker/forking-sites.html) to make an editable copy. Then your
forked copy will be able to write changes to itself.

<figure>
<img src="/img/posts/self-mutating-websites/self-mutation.gif">
<figcaption>Forking a self-mutating site to make an editable copy that can write to itself.</figcaption>
</figure>

In the example above, the site writes to its own `index.html` to persist its changes.

## How do self-mutating websites work?

Self-mutating websites are [dat websites](/docs/using-beaker/the-peer-to-peer-web.html) which use the [`DatArchive` Web API](/docs/apis/dat.html) to modify their own files. These modifications can include anything from storing user-data to modifying the application's own code.

Self-mutation is a very convenient way to do personal storage and publishing, eg with a Wiki or Todo list. The application would write any user-data to its own site-archive, storing the data for the long term, and making it possible to share that data over the network.


## How can I build a self-mutating site?

The fastest way to get started is to [visit this example application](dat://6ef097c861c8c1857aefa9b2e9700d3061955d4552c492ab1e3f69ca77fdcba7) and view the source, or [fork it](TODO) to create your own copy to build with. This app includes everything you need to know to build a self-mutating website.