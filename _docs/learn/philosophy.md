---
title: Beaker's Philosophy
---

Beaker is made by software enthusiasts who want a better Web; one that's decentralized, easy to hack, and safe to use. So we started a new browser, with these goals in mind:

 - Apply the Unix philosophy of small, interoperable programs.
 - Separate the frontend from the backend of Web apps.
 - Make every site [forkable](./howto/create-a-site.html) and user-programmable.
 - Lock Javascript behind a network-restricted sandbox by default.

**At the heart of Beaker** is the [Dat Protocol](./learn/dat.html), a peer-to-peer file transport which strongly guarantees uniform distribution of static packages. Beaker uses Dat to distribute sites, applications, user files, and security certificates. It is exposed to applications as a site-transport, networked files API, and networked feeds API.

Dat decentralizes authority in Beaker's network of users and servers. Each archive is signed by the authors and identified by public key, therefore rehosting does not change the URL. Applications can use Dat as a decentralized and offline-first backend to their user-data.