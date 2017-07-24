---
version: 0.7.4
releaseDate: July 24, 2017
size: 65 MB
layout: release
images: [_1.png, _2.png, _4.png, _3.png]
---

<h2>Navbar dropdown menu<span class="tag new">new</span></h2>

This release adds a menu to the navbar of dat:// pages for contextual actions. This replaces the dat sidebar with something a bit faster and more convenient to use.

<figure>
<img src="/img/releases/0-7-4_4.png">
<figcaption>The new navbar dropdown menu.</figcaption>
</figure>

<h2>New dat.json config: fallback_page and web_root<span class="tag new">new</span></h2>

A dat:// site can now specify a path in "fallback_page" in their dat.json to set the 404 page. This is useful for nice 404 pages, and also for creating SPAs. ([view demo gif](/img/docs/demo-fallback-page.gif))

You can also now specify a "web_root" in your dat.json to control which folder the dat:// site serves out of. This is useful for statically-generated sites (eg with Jekyll) where you want to ship the source, and therefore need to point the browser to a subfolder that contains the built output. ([view demo gif](/img/docs/demo-web-root.gif))

<h2>Download site as .zip<span class="tag new">new</span></h2>

You can now download a dat:// site as a .zip file.

<figure>
<img src="/img/releases/0-7-4_3.png">
<figcaption>Download a dat:// site as a .zip.</figcaption>
</figure>

<h2>UI and UX improvements<span class="tag updated">updated</span></h2>

We made some tweaks to the UI and UX to make Beaker nicer to use.

 - ([#615](https://github.com/beakerbrowser/beaker/pull/615)) New tabs aesthetic. Tabs UI should also perform better now. <a class="thumbnail" href="#" data-src="/img/releases/0-7-4_1.png">(click to preview)</a>
 - ([#588](https://github.com/beakerbrowser/beaker/pull/588)) Revamped the "Select Archive" modal. <a class="thumbnail" href="#" data-src="/img/releases/0-7-4_2.png">(click to preview)</a>
 - ([#599](https://github.com/beakerbrowser/beaker/pull/599)) Dat.json is now exported to the staging area, for you to edit as a site author.
 - ([#596](https://github.com/beakerbrowser/beaker/pull/596)) The auto-download behaviors of a saved site are now configurable.

<h2>Security model updates<span class="tag updated">updated</span></h2>

We relaxed certain constraints to make Beaker more accessible to developers. We also removed some metadata from the dat.json manifest 

 - ([#586](https://github.com/beakerbrowser/beaker/pull/586)) The `DatArchive` API is now accessible from HTTPS.
 - ([#590](https://github.com/beakerbrowser/beaker/pull/590)) The `DatArchive` API is now accessible from http://localhost.
 - ([#617](https://github.com/beakerbrowser/beaker/pull/617)) Added the ability to embed HTTPS assets in a dat:// site.
 - ([#598](https://github.com/beakerbrowser/beaker/pull/598)) Deprecated `createdBy` and `forkOf` from the dat.json manifest, to avoid accidentally leaking the address of private archives or apps.
 - ([#619](https://github.com/beakerbrowser/beaker/pull/619)) Deprecated custom `navigator.permissions` perms (no longer relevant).