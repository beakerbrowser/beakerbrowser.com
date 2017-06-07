---
layout: post
title: View source on the peer-to-peer Web
author: Tara Vancil
authorLink: https://twitter.com/taravancil
avatar: /img/team/taravancil.jpg
image: /img/posts/view-source/netscape-view-source-cropped.jpg
---

The spirit of openness has been baked into the Web since its formation. The Web was built to share
documents written in *plain text* that could be downloaded and viewed transparently. 

<figure>
<img src="/img/posts/view-source/netscape-view-source.gif">
<figcaption>Early View-source. <a href="http://ueu.co/what-the-browsers-dont-show-you/">&mdash; ueu.co</a></figcaption>
</figure>

But most Web applications aren't composed of open documents anymore. Most
are delivered as bundled, minified, and indecipherable versions of the original source. 

From [Jenn Schiffer's Greater Than Code interview](https://www.greaterthancode.com/podcast/episode-020-jenn-schiffer/):

<blockquote class="big">View source is not really a thing that a lot of new developers have access to when they want to learn how to build more sophisticated applications, which is unfortunate.</blockquote>

We agree. The Web is the fabric of so much innovation and creativity, but unfortunately the complexity of Web applications has introduced a significant barrier to learning and exploring.

## View source in peer-to-peer websites

The peer-to-peer Web can help.

The [Dat peer-to-peer
protocol](/docs/inside-beaker/dat-files-protocol.html) behaves like BitTorrent mixed with HTTP. Instead of downloading just one file, **you download a
file listing,** and can choose to view any file from that listing. This makes View Source
more interesting!

<figure>
<img src="/img/posts/view-source/beaker-view-source.jpg">
<figcaption>View-source in P2P shows the whole site.</figcaption>
</figure>

With Beaker and Dat, you can still minify your source code, but you can also ship the original source too. This means
users can view the entire set of files used to generate the application code -- including all source files and build tools.

## An open source Web

This is just one example of how the [Dat protocol](/docs/inside-beaker/dat-files-protocol.html) brings radical transparency and connectivity to the Web, and we're really excited about its potential.

Soon we'll tell you about [forking websites](/docs/using-beaker/forking-sites.html) in Beaker, and how it enables a a truly open-source Web.
