---
title: 'Watch for file changes'
section: guides
sectionTitle: Guides
order: 9
---

The [DatArchive API](/docs/apis/dat.html) includes a [`watch()`](/docs/apis/dat.html#watch) method to notify you when a file or folder changes.
It works for both local and remote files, and accepts a glob pattern for filtering files.

**Watch all files**

<figcaption class="code">example code</figcaption>
```js
var archive = new DatArchive('dat://beakerbrowser.com')
archive.watch(e => console.log(e.path, 'has changed'))
```

**Watch files or folders**

<figcaption class="code">example code</figcaption>
```js
var archive = new DatArchive('dat://beakerbrowser.com')
archive.watch('/index.html', e => console.log('index.html has changed'))
archive.watch('/js/', e => console.log('a file in js/ has changed'))
```

**Glob patterns**

<figcaption class="code">example code</figcaption>
```js
var archive = new DatArchive('dat://beakerbrowser.com')
archive.watch('/posts/*.json', e => {
  console.log('a .json file in /posts/ has changed')
})
```

## Watcher events

There are two events emitted by the watcher.

 - **'invalidated'** means that a file has been changed but has not downloaded yet.
 - **'changed'** means that a file has been changed and the change has downloaded.

Both events are emitted in all cases.
If the file archive is locally-owned, they will fire immediately after each other.
The default event which `watch()` listens to is 'invalidated'.

To listen to the 'changed' event, you can use the Watcher object that's returned by `watch()`.

<figcaption class="code">example code</figcaption>
```js
var archive = new DatArchive('dat://beakerbrowser.com')
var watcher = archive.watch('/index.html')
watcher.addEventListener('invalidated', e => console.log('index.html has invalidated'))
watcher.addEventListener('changed', e => console.log('index.html has changed'))
```

If you wish to stop listening for changes, you can use the Watcher's `close()` method.

<figcaption class="code">example code</figcaption>
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
