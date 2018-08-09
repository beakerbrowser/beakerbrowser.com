---
title: 'Example: Create or fork a site'
section: guides
sectionTitle: Guides
order: 10
---

The [DatArchive API](/docs/apis/dat.html) provides three ways to get an archive instance:

 1. Open an existing archive with [the `DatArchive` constructor](/docs/apis/dat.html#datarchive).
 2. Create a new site with [`DatArchive.create()`](/docs/apis/dat.html#datarchive-create).
 3. Fork an existing site with [`DatArchive.fork()`](/docs/apis/dat.html#datarchive-fork).

## `DatArchive`

To open an existing archive, use the [`DatArchive` constructor](/docs/apis/dat.html#datarchive) as follows:

<figcaption class="code">snippet</figcaption>
```js
var archive = new DatArchive('dat://…')
```

## `DatArchive.create()`

To create a new site, use [`DatArchive.create()`](/docs/apis/dat.html#datarchive-create) as follows:

<figcaption class="code">snippet</figcaption>
```js
var archive = await DatArchive.create({title: '…', description: '…'})
```

This will result in a modal window which the user will either confirm or deny.

## `DatArchive.fork()`

To fork an existing site, use [`DatArchive.fork()`](/docs/apis/dat.html#datarchive-fork) as follows:

<figcaption class="code">snippet</figcaption>
```js
var archive = await DatArchive.fork('dat://…', {
  title: '…',
  description: '…'
})
```

This will result in a modal window which the user will either confirm or deny.

A fork will be made of the currently downloaded state. That means, if you want to be sure a full fork is made, you should call [`download()`](/docs/apis/dat.html#download) first.