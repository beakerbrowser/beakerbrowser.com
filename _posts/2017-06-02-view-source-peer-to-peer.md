---
layout: post
title: View source on the peer-to-peer Web
author: Tara Vancil
authorLink: https://twitter.com/taravancil
avatar: /img/team/taravancil.jpg
image: /img/ss/fork-site-460x215.jpg
---

At the core of the open Web, is the spirit of connectivity. The Web was built as a common interface for any computer to share, download, and create links to files. Because the Web was designed as a tool for sharing and viewing *documents*, not distinctly just for delivering *applications*, even in Mosaic (which would later become one of the first widely popular Web browsers, Netscape), built-in tools for viewing documents were an important part of the software.

## View source

Every modern Web browser has a mechanism for viewing a document's source. These tools are not impressive feats of technology, but the fact that browser vendors bake them in as a core piece of their software, says something important — **the Web is composed of documents**.

And you can view them! I've heard many stories from programmers who say they first learned how to build web pages by viewing the source of a website they thought was cool.

## View source in Beaker

Of course, we've built `beaker://view-source`, which lets you view the source of any document on the Web.

### View source for peer-to-peer websites

Additionally, we've built-in support for viewing the source of a peer-to-peer website, which is even more powerful than traditional View source tools. While you're visiting a peer-to-peer website in Beaker, its files are temporarily downloaded to your computer, and you help rehost those files to the site's other visitors. This means that when you view the source of a peer-to-peer website, you can actually view all of thesite's files at once, not just one file associated with a single `GET` request.

We believe this has the potential to alleviate a major annoyance on the Web — modern Web applications are compressed, mangled, and bundled, to an almost incomprehensible representation of the source code. The performance motivations behind these techniques are sound, but when code is compressed, it becomes difficult to extract value from View source tools.

From [Jenn Schiffer's Greater Than Code interview](https://www.greaterthancode.com/podcast/episode-020-jenn-schiffer/)

> View source is not really a thing that a lot of new developers have access to when they want to learn how to build more sophisticated applications, which is unfortunate.

We agree.

Of course, many bundling tools provide options for generating and shipping source maps, which make it possible to view the source that corresponds to asingle compressed file.

In Beaker, sourcemaps for peer-to-peer websites aren't necessary. Because site visitors can download all the files associated with a site, it's possibleto package the source with the build.

This means that in Beaker, you can view the entire directory that an author used to create their website, including their source files, what build toolchain they used, and more.

TODO screenshot

## An open source Web

We believe these tools bring radical transparency and connectivity to the Web and are excited about the potential...blah blah.

Next time, we'll tell you how we've built forking into Beaker...