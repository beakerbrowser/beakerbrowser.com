---
layout: post
title: View source on the peer-to-peer Web
author: Tara Vancil
authorLink: https://twitter.com/taravancil
avatar: /img/team/taravancil.jpg
image: /img/ss/fork-site-460x215.jpg
---

The spirit of openness has been baked into the Web since its formation. The Web was built to share
documents written in *plain text* that could be downloaded and viewed transparently. 

<figure>
<img src="/img/blog/netscape-view-source.gif">
<figcaption>Early View-source. <a href="http://ueu.co/what-the-browsers-dont-show-you/">&mdash; ueu.co</a></figcaption>
</figure>

Still today, every modern Web browser has a mechanism for viewing a document's source. The fact that browser vendors build these tools as a core component of their software says something important — **the Web is composed of open documents**.

I've heard so many stories from programmers who say they first learned how to build web pages by viewing the source of a website they thought was cool, which is amazing!

But most Web applications aren't composed of open documents anymore. Most
are delivered as bundled, minified, and indecipherable versions of the original source. 

From [Jenn Schiffer's Greater Than Code interview](https://www.greaterthancode.com/podcast/episode-020-jenn-schiffer/):

> View source is not really a thing that a lot of new developers have access to when they want to learn how to build more sophisticated applications, which is unfortunate.

We agree. The Web is the fabric of so much innovation and creativity, but unfortunately the complexity of Web applications has introduced a significant barrier to learning and exploring.

<figure>
<img src="/img/blog/minified-js.png">
<figcaption>Modern View-source, when a sourcemap isn't available.</figcaption>
</figure>

## View source in peer-to-peer websites

In Beaker, we've built `beaker://view-source`, which you can use to view any
document on the Web.

Because we alse use the [Dat peer-to-peer
protocol](/docs/inside-beaker/dat-files-protocol.html) to host files and
websites, `beaker://view-source` has some additional features that are very interesting. 

Dat behaves similarly to BitTorrent. When you visit a website, you download the
website's files and act as a seed for those files. This makes View Source
interesting, because instead of downloading just *one* file, you download a
*file listing*, and can choose to view any file from that listing.

This means that when you view the source of a website hosted with Dat, you can actually view all of the site's files at once, not just one file associated with a single `GET` request. This changes the entire dynamic of View Source ― because now you can see the whole site.

<figure>
<img src="/img/blog/beaker-view-source.jpg">
<figcaption>View-source in Beaker.</figcaption>
</figure>

With Beaker and Dat, you can still minify your source code, but you can ship the original source too. This means
users can view the entire set of files used to generate the application code, including all source files and build tools.

## An open source Web

This is just one example of how the [Dat protocol](/docs/inside-beaker/dat-files-protocol.html) brings radical transparency and connectivity to the Web, and we're really excited about its potential.

Soon we'll tell you about [forking websites](/docs/using-beaker/forking-sites.html) in Beaker, and how it enables a a truly open-source Web.
