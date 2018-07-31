---
title: Read files from a dat:// website
section: guides
sectionUrl: /docs/guides
sectionTitle: Guides
author: Paul Frazee
authorLink: https://pfrazee.hashbase.io
authorAvatar: /img/team/pfrazee.jpg
description: Beaker's DatArchive API provides tools for reading files and directories on the Dat network. Here are some examples.
---

Beaker's [`DatArchive` API](/docs/apis/dat) provides tools for reading files and directories on the Dat network. Here are some examples.

## `readdir()`

The [`readdir()` method](/docs/apis/dat#readdir) provides a list of files in a folder.

### List the top-level files in a folder

```js
var filenames = await archive.readdir('/')
```

### List all files

```js
var filepaths = await archive.readdir('/', {recursive: true})
```

### List the metadata in the top-level directory

```js
var fileinfos = await archive.readdir('/', {stat: true})
```

## `readFile()`

### Read a file's content

The [`readFile()` method](/docs/apis/dat#readfile) reads the content of a file from the Dat network:

```js
// read as string
var str = await archive.readFile('/index.html', 'utf8')

// read as arrayBuffer
var arrayBuffer = await archive.readFile('/img/logo/logo.png', 'binary')

// read as base64
var base64 = await archive.readFile('/img/logo/logo.png', 'base64')

// read as hex
var hex = await archive.readFile('/img/logo/logo.png', 'hex')
```

### Reading a file over the network

Files in remote archives will be automatically downloaded when `readFile()` is called.

#### Timeouts

Sometimes the file will not be available, so the `readFile()` call will time out.
You can adjust the timeout of all the methods in this guide using the `timeout` option:

```js
archive.readFile('/index.html', {timeout: 15e3, encoding: 'utf8'})
archive.readdir('/', {timeout: 15e3})
```

## `stat()`

### Calculating file download progress with `stat()`

The [`stat()` method](/docs/apis/dat#stat) provides metadata about a file or folder:

```js
var info = await archive.stat('index.html')
```

The returned `Stat` object has the following structure:

```js
Stat {
  isDirectory() // boolean
  isFile() // boolean

  // files only:
  size // number (bytes)
  blocks // number (number of data blocks in the metadata)
  downloaded // number (number of blocks downloaded, if a remote archive)
  mtime // Date (last modified time)
  ctime // Date (creation time)
}
```

You can calculate how much of a file has been downloaded using the data provided in the `Stat` object:

```js
var st = await archive.stat('index.html')
var percentDownloaded = st.downloaded / st.blocks
var bytesDownloaded = st.size * percentDownloaded
```

### Calculating folder download progress with `stat()`

You can calculate the download progress of a folder using the recursive stat `readdir()` call. The process is similar to calculating a single file's download progress, but it requires some aggregation:

```js
var sts = await archive.readdir('/', {recursive: true, stat: true})
var blocks = 0, downloaded = 0, bytes = 0

for (var st of sts) {
  bytes += st.stat.bytes
  blocks += st.stat.blocks
  downloaded += st.stat.downloaded
}

var percentDownloaded = downloaded / blocks
var bytesDownloaded = size * percentDownloaded
```

## Further reading

- [`readdir`](/docs/apis/dat#readdir)
