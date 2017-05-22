---
title: Code: Create or fork a site
section: tutorials
sectionTitle: Tutorials
order: 10
---

The [DatArchive API] provides three ways to get an archive instance:

 1. Open an existing archive with [the `DatArchive` constructor].
 2. Create a new site with [`DatArchive.create()`].
 3. Fork an existing site with [`DatArchive.fork()`].

To open an existing archive, use [the `DatArchive` constructor] as follows:

```js
var archive = new DatArchive('dat://…')
```

To create a new site, use [`DatArchive.create()`] as follows:

```js
var archive = await DatArchive.create({title: '…', description: '…''})
```

This will result in a modal window which the user will either confirm or deny.

[TODO screenshot]

To fork an existing site, use [`DatArchive.fork()`] as follows:

```js
var archive = await DatArchive.fork('dat://…', {title: '…', description: '…'})
```

This will result in a modal window which the user will either confirm or deny.

[TODO screenshot]

A fork will be made of the currently downloaded state. That means, if you want to be sure a full fork is made, you should call [`download()`] first.