---
title: Availability and reliability
section: usingBeaker
sectionTitle: Using Beaker
order: 6
---

## Public peers

Uptime is not guaranteed for sites transported with a peer-to-peer protocol like <a href="https://github.com/datproject/dat">Dat</a>. If no peers are actively hosting your files, then your site won’t be available to visitors.

You can use a public peer service which makes sure your files are always available.

The Beaker team runs an open-source, self-deployable public peer service called <a href="https://hashbase.io">Hashbase</a>. In addition to rehosting your files, <a href="https://hashbase.io">Hashbase</a> provides short URLs like <code>dat://mysite.hashbase.io</code>, plus HTTPs mirroring.