---
title: Read site files
section: guides
sectionTitle: Guides
order: 6
---

The [DatArchive API](/docs/apis/dat.html) provides a simple set of APIs to read files and directories.

<figcaption class="code">create a dat archive instance</figcaption>
```js
var archive = new DatArchive('dat://beakerbrowser.com')
```

## stat()

The [`stat()` method](/docs/apis/dat.html#stat) provides metadata about a file or folder.

<figcaption class="code">get the metadata for a file</figcaption>
```js
var info = await archive.stat('/index.html')
```

The returned `Stat` object has the following structure:

<figcaption class="code">Stat</figcaption>
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

### Calculating file download progress

You can calculate how much of a file has downloaded using the file metadata.
Files are stored as fairly large "blocks" in dat.
We can get a percentage downloaded by dividing the "downloaded" blocks by the "total" blocks.

```js
var st = await archive.stat('/index.html')
var percentDownloaded = st.downloaded / st.blocks
var bytesDownloaded = st.size * percentDownloaded
```

Most files are only 1 block in size, so the percentage of progress is not very precise.

### Timestamps

The accuracy of timestamps in `stat()` metadata is not guaranteed.
The `mtime` or `ctime` could be incorrect for the following reasons:

 - The dat author's clock is misconfigured
 - The dat author intentionally set an incorrect time

So take timestamps with a grain of salt!
Because they might be wrong.

## readdir()

The [`readdir()` method](/docs/apis/dat.html#readdir) provides a list of files in a folder.

<figcaption class="code">list the files in the top folder</figcaption>
```js
var filenames = await archive.readdir('/')
```

It includes convenience options for some common cases.

<figcaption class="code">list all files in the archive</figcaption>
```js
var filepaths = await archive.readdir('/', {recursive: true})
```

<figcaption class="code">list metadata in the top directory</figcaption>
```js
var fileinfos = await archive.readdir('/', {stat: true})
```

### Calculating folder download progress

You can calculate the download progress of a folder using the recursive stat `readdir()` call.
The process is similar to calculating a single file's download progress, but it requires some aggregation.

```js
var sts = await archive.readdir('/', {recursive: true, stat: true})
var blocks = 0, downloaded = 0, bytes = 0
for (var st of sts) {
  bytes += st.stats.bytes
  blocks += st.stat.blocks
  downloaded += st.stat.downloaded
}
var percentDownloaded = downloaded / blocks
var bytesDownloaded = size * percentDownloaded
```

## readFile()

The [`readFile()` method](/docs/apis/dat.html#readfile) provides the content of a file.
The second parameter specifies the encoding which you'd like returned.

<figcaption class="code">read a file</figcaption>
```js
var str = await archive.readFile('/index.html', 'utf8')
var arrayBuffer = await archive.readFile('/img/logo/logo.png', 'binary')
var base64 = await archive.readFile('/img/logo/logo.png', 'base64')
var hex = await archive.readFile('/img/logo/logo.png', 'hex')
```

### Reading over the network

Files in remote archives will be automatically downloaded when `readFile()` is called.

Sometimes the file will not be available, and so the `readFile()` call will time out.
You can adjust the timeout of all the methods in this guide using the `timeout` option.

<figcaption class="code">setting a 15s timeout</figcaption>
```js
archive.stat('/index.html', {timeout: 15e3})
archive.readFile('/index.html', {timeout: 15e3, encoding: 'utf8'})
archive.readdir('/', {timeout: 15e3})
```
