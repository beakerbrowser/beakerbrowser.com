---
layout: post
title: Self-mutating websites
author: Paul Frazee
authorLink: https://twitter.com/pfrazee
avatar: /img/team/pfrazee.jpg
---

In [Beaker 0.7.2](TODO), we made policy updates that enable an application-model we call "Self-mutating websites." In this post, I'll explain what they are and how to get the most out of them.

### What are self-mutating websites?

Self-mutating websites are [dat websites](TODO) which use the [`DatArchive` Web API](TODO) to modify their own files. These modifications can include anything from storing user-data to modifying the application's own code.

### Why would you want to self-mutate?

Self-mutation is a very convenient way to do personal storage and publishing, eg with a Wiki or Todo list. The application would write any user-data to its own site-archive, storing the data for the long term, and making it possible to share that data over the network.

### How would self-mutating websites work?

For a new visitor, a self-mutating site would be read-only. This is because [users must own the private key of a dat to write to it](TODO).

So, to make changes, the visitor would [fork the site](TODO), making a private copy. The new fork would then be writable.

### Are self-mutating sites safe?

This change came along with a [lengthy and ongoing discussion about application security](TODO). Self-mutating sites introduce some new challenges which we are going to have to carefully monitor. For now, we've enabled them without restrictions.

### How can I build a self-mutating site?

The fastest way to get started is to [visit this example application](TODO) and view the source, or [fork it](TODO) to create your own copy to build with. This app includes everything you need to know to build a self-mutating website.