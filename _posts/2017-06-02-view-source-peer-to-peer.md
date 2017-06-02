---
layout: post
title: View source on the peer-to-peer Web
author: Tara Vancil
authorLink: https://twitter.com/taravancil
avatar: /img/team/taravancil.jpg
image: /img/ss/fork-site-460x215.jpg
---

At its core, the spirit of the early Web was to be open. It was built to share documents written in *plain text* so that anybody could view the source.

<figure>
<img src="/img/blog/netscape-view-source.gif">
<figcaption>Early View-source. <a href="http://ueu.co/what-the-browsers-dont-show-you/">&mdash; ueu.co</a></figcaption>
</figure>

Every modern Web browser still has this mechanism for viewing a document's source. The fact that browser vendors bake them in as a core piece of their software says something important — **the Web is composed of open documents**.

I've heard so many stories from programmers who say they first learned how to build web pages by viewing the source of a website they thought was cool.

---

But most Web applications aren't open documents anymore. They're made of services, JS frameworks, and minifiers. Most of the important code doesn't get downloaded at all, because it's locked up on a server somewhere.

From [Jenn Schiffer's Greater Than Code interview](https://www.greaterthancode.com/podcast/episode-020-jenn-schiffer/)

> View source is not really a thing that a lot of new developers have access to when they want to learn how to build more sophisticated applications, which is unfortunate.

The complexity of applications has cause us to lose some of the spirit of the open Web -- and that's a shame, because it keeps people from learning.

<figure>
<img src="/img/blog/minified-js.png">
<figcaption>Modern View-source, when a sourcemap isn't available.</figcaption>
</figure>

## View source in peer-to-peer websites

In Beaker, of course, we've built `view-source`. But in Beaker, we use the [Dat peer-to-peer protocol](/docs/inside-beaker/dat-files-protocol.html). We still support `http://`, but if you want to host a site from your computer, you do it over `dat://`, and then it works a lot like BitTorrent, with your computer acting like the seed.

This matters because Dat changes the way that sites are downloaded. Rather than downloading just one document, you download *a file-listing*, and then you choose the files you want from that listing.

This means that when you view the source of a Dat website, you can actually view all of the site's files at once, and not just one file associated with a single `GET` request. This changes the whole dynamic of view-source -- because now, you see the whole site.

<figure>
<img src="/img/blog/beaker-view-source.jpg">
<figcaption>View-source in Beaker.</figcaption>
</figure>

We believe this has the potential to alleviate a major annoyance on the Web. You can still minify your builds, but you can ship the original source too, and users will download the ones they want to see. Users can view the entire directory that an author used to create their website, and see their source files, what build toolchain they used, and more.

## An open source Web

We believe this is one way how Dat brings radical transparency and connectivity to the Web, and we're really excited about that potential.

Next time, we'll talk more about an open-source Web, and how we can use it to [fork sites](/docs/using-beaker/forking-sites.html).