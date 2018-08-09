---
title: Peer-to-peer Web applications
section: howBeakerWorks
sectionTitle: How Beaker Works
sectionUrl: /docs/how-beaker-works
---

<p class="accent">
  Static websites are an important (and fun!) part of the peer-to-peer Web, but the
  Web wouldn't be the Web without applications that provide more dynamic functionality.
</p>

## What's a Web app?

The line between website and Web app is fuzzy — they can both be described as a folder of [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics), and [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) files.

While websites and apps are compositionally similar, we often use the word "app" to describe a website that provides some special behavior or functionality with JavaScript. A calculator, a tool for managing photo albums, Twitter, or your bank's website could all be described as Web apps.

## What's a peer-to-peer Web app?

A p2p Web app is not much different than any other Web app, with the exception that its files are transported with a p2p protocol!

<!-- TODO add a bit about the APIs -->

### What's so special about peer-to-peer apps?

On the p2p  Web, files are transmitted directly between computers instead of from servers to computers. Because participants can connect directly to one another, it makes it possible to build apps with entirely new architectures that don't necessarily require managing a database or paying for a server!

Instead of making a request to a database or server, when the app needs to update the user's profile or store new data, it can use [browser APIs](/docs/apis) to read and write to the peer-to-peer website that contains the user's profile and data.

This has a few advantages:

- Users control their own profiles and data
- Developers can launch applications that use profiles without needing to set up a server or database
- There's no third-party server in charge of managing millions of user's profiles

This is is just a brief overview of peer-to-peer applications. To learn more about building p2p apps, see our [guides](/docs/guides) section.

Read next: [All about seeding](/docs/how-beaker-works/all-about-seeding)