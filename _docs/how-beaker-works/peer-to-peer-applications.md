---
title: Peer-to-peer Web applications
section: howBeakerWorks
sectionTitle: How Beaker Works
order: 4
---

<p class="accent">
  Static websites are an important (and fun!) part of the peer-to-peer Web, but the
  Web wouldn't be the Web without applications that provide more dynamic functionality.
</p>

## What's a Web application?

The line between website and Web application is fuzzy — they can both be described
as a folder of [HTML](todo), [CSS](todo), and [JavaScript](todo) files. While websites and
applications are compositionally similar, roughly,
a Web application provides special behavior or functionality using JavaScript.

A calculator, a tool for managing photo albums, Twitter, or your bank's website
could all be described as Web applications.

On the Web today, when you login to an app, you send your username and password
to a server in the cloud. That server is responsible for hosting your user profile and all the data
associated with it, and your browser simply acts as the interface to view the software,
the data, and the business logic that the server sends to it.

<figure>
  <img src="/img/icon/traditional-web.svg"/>
</figure>

## What's a peer-to-peer Web application?

A peer-to-peer Web application is not much different than any other Web application,
with the exception that its files are transported using a peer-to-peer protocol!

### User profiles, data, and business logic on the peer-to-peer Web

On the peer-to-peer Web, files are transmitted directly between computers instead
of from servers to computers. This means it's possible to build completely peer-to-peer
applications that don't require managing a database or a server!

Instead of making a request to a database server, when the app needs to update
the user's profile or store new data, it can use browser APIs to read and write
to the peer-to-peer website that contains the user's profile and data.

This has a few advantages:

- Users control their own profiles and data
- Developers can launch applications that use profiles without needing to set up a server or database
- There's no third-party server in charge of managing millions of user's profiles

This is is just a brief overview of peer-to-peer applications. For a deep-dive on
building peer-to-peer applications and recommended architectures and techniques, see
our guides [todo] section.
