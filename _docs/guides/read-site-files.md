---
title: 'Example: Read site files'
section: guides
sectionTitle: Guides
order: 6
---

The [DatArchive API](/docs/apis/dat.html) provides a simple set of APIs to read files and directories. After instantiating an archive instance, you can call `stat()`, `readdir()`, and `readFile()`.

## Setup

First, [create a new Dat site](/docs/using-beaker/create-a-site.html) using this [<i class="fa fa-file-archive-o"></i> template.zip](/docs/tutorials/template.zip). In `js/index.js`, add the following code. We’ll use the API to read about the current site.

<figcaption class="code">js/index.js</figcaption>
```js
async function main () {
  // create an archive instance for the current website
  var archive = new DatArchive(window.location.toString())
}
```

## `readdir`

Let’s first list the files in the site. Add this to the end of main:

<figcaption class="code">js/index.js</figcaption>
```js
var files = await archive.readdir('/')
console.log(files)
```

If you save and refresh the page, you should see the following output in your console:

<figure>
<img data-src="/img/docs/tut-read-site-files/readdir.jpg" >
<figcaption>The output of archive.readdir('/')</figcaption>
</figure>

That’s a listing of all the files in the toplevel directory. What if we want to list the children as well? Beaker provides an option for that. Change your code to look like this:

<figcaption class="code">js/index.js</figcaption>
```js
var files = await archive.readdir('/', {recursive: true})
console.log(files)
```

Now you should see this:

<figure>
<img data-src="/img/docs/tut-read-site-files/readdir-recursive.jpg" >
<figcaption>The output of archive.readdir('/', {recursive: true})</figcaption>
</figure>

The `recursive` option is much more efficient than manually recursing the tree.

## `readFile (string)`

Now let’s read a file. Add this to the end of your main function:

<figcaption class="code">js/index.js</figcaption>
```js
var indexJs = await archive.readFile('/js/index.js')
console.log(indexJs)
```

Reload the page and you should see this:

<figure>
<img data-src="/img/docs/tut-read-site-files/readfile.jpg" >
<figcaption>The output of archive.readFile('/js/index.js')</figcaption>
</figure>

## `readFile (binary)`

What if we wanted to read a binary file? Let’s do that to add a copy of the image to the page. Add this to the end of your main function:

<figcaption class="code">js/index.js</figcaption>
```js
var beakerPng = await archive.readFile('/img/logo.png', 'base64')
var img = document.createElement('img')
img.src = 'data:image/png;base64,'+beakerPng
document.body.appendChild(img)
```

Reload the page and you should see this:

<figure>
<img data-src="/img/docs/tut-read-site-files/imgcopy.jpg" >
<figcaption>The duplicated image</figcaption>
</figure>

## `stat`

It's useful to see the size, creation time, and modify time of a file. You can get that information with `stat`. Add this to the end of main:

<figcaption class="code">js/index.js</figcaption>
```js
var indexJsStat = await archive.stat('/js/index.js')
console.log(indexJsStat)
```

Reload the page and you should see this:

<figure>
<img data-src="/img/docs/tut-read-site-files/stat.jpg" >
<figcaption>The output of archive.stat('/js/index.js')</figcaption>
</figure>

The output is made to mimic the output of node.js’ stat() call. The attributes you’ll mostly be interested in are `size`, `mtime`, and `ctime`. Note, however, that mtime and ctime aren’t verified and they could be wrong!

## `timeout`

One last thing: suppose you wanted to read a file in a Dat which the user will have to download first. There’s a chance that the Dat won’t be found, either because the network is down, or because the Dat isn’t being hosted by anybody.

To deal with this, Beaker sets a default timeout of 5 seconds. You can increase it, like so:

<figcaption class="code">js/index.js</figcaption>
```js
// wait 10 seconds (10000 ms) before timing out
var beakerPng = await dat.readFile('/img/beaker.png', {
  encoding: 'base64',
  timeout: 10000
})
```

Or, you can disable the timeout altogether by setting timeout to `false`.

## Summary

For review, here is our final `js/index.js`:

<figcaption class="code">js/index.js</figcaption>
```js
async function main () {
  // create an archive instance for the current website
  var archive = new DatArchive(window.location.toString())

  // list the files in the site
  var files = await archive.readdir('/', {recursive: true})
  console.log(files)

  // read this file
  var indexJs = await archive.readFile('/js/index.js')
  console.log(indexJs)

  // duplicate the image
  var beakerPng = await archive.readFile('/img/logo.png', 'base64')
  var img = document.createElement('img')
  img.src = 'data:image/png;base64,'+beakerPng
  document.body.appendChild(img)

  // get this file's metadata
  var indexJsStat = await archive.stat('/js/index.js')
  console.log(indexJsStat)
}

main()
```