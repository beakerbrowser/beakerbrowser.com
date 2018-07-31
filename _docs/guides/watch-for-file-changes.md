---
title: Watching for file changes
section: guides
sectionUrl: /docs/guides
sectionTitle: Guides
author: Paul Frazee
authorAvatar: /img/team/pfrazee.jpg
authorLink: https://pfrazee.hashbase.io
description: Learn how to use the DatArchive.watch() API by example
---

Beaker's [`DatArchive` API](/docs/apis/dat) includes the [`watch()`](/docs/apis/dat.html#watch) method to notify you when a file or folder changes.
It works for both local and remote files, and accepts a glob pattern for filtering files.

## Examples

### Watch all files

```js
var archive = new DatArchive('dat://beakerbrowser.com')
archive.watch(e => console.log(e.path, 'has changed'))
```

### Watch files or folders

```js
var archive = new DatArchive('dat://beakerbrowser.com')
archive.watch('/index.html', e => console.log('index.html has changed'))
archive.watch('/js/', e => console.log('a file in js/ has changed'))
```

### Using a glob pattern

```js
var archive = new DatArchive('dat://beakerbrowser.com')
archive.watch('/posts/*.json', e => {
  console.log('a .json file in /posts/ has changed')
})
```

## Watcher events

There are two events emitted by the watcher:

 - `'invalidated'` means that a file has been changed but has not been downloaded
 - `'changed'` means that a file has been changed and the change has been downloaded

Both events are emitted in all cases. If the file archive is locally-owned, they will fire immediately after each other. The default event which `watch()` listens to is 'invalidated'.

To listen to the `'changed'` event, you can use the object that's returned by `watch()`:

```js
var archive = new DatArchive('dat://beakerbrowser.com')
var watcher = archive.watch('/index.html')
watcher.addEventListener('invalidated', e => console.log('index.html has invalidated'))
watcher.addEventListener('changed', e => console.log('index.html has changed'))
```

If you wish to stop listening for changes, you can use the `close()` method:

```js
var archive = new DatArchive('dat://beakerbrowser.com')
var watcher = archive.watch('/index.html', e => {
  console.log('index.html has changed')
})
// ...
watcher.close()
```

## Further reading

- [`watch()` API reference](/docs/apis/dat.html#watch)
