---
title: 'Code: Read site files'
section: tutorials
sectionTitle: Tutorials
order: 6
---

The [DatArchive API] provides a simple set of APIs to read files and directories. After instantiating an archive instance, you can call stat(), readdir(), and readFile().

First, [create a new Dat site using this template]. In `js/index.js`, add the following code. We’ll use the API to read about the current site.

```js
async function main () {
  // create an archive instance for the current website
  var archive = new DatArchive(window.location.toString())
}
```

Let’s first list the files in the site. Add this to the end of main:

```js
  var files = await archive.readdir('/')
  console.log(files)
```

If you save and refresh the page, you should see the following output in your console:

[TODO screenshot]

That’s a listing of all the files in the toplevel directory. What if we want to list the children as well? Beaker provides an option for that. Change your code to look like this:

```js
  var files = await archive.readdir('/', {recursive: true})
  console.log(files)
```

Now you should see this:

[TODO screenshot]

Handy! The `recursive` option is much more efficient than manually recursing the tree.

Now let’s do a little self-examination. Add this to the end of your main function:

```js
  var indexJs = await archive.readFile('/js/index.js')
  console.log(indexJs)
```

Reload the page and you should see this:

[TODO screenshot]

Pretty simple, but what if we wanted to read a binary? Let’s do that to add a copy of the image to the page. Add this to the end of your main function:

```js
  var beakerPng = await dat.readFile('/img/beaker.png', 'base64')
  var img = document.createElement('img')
  img.src = 'data:image/png;base64,'+beakerPng
  document.body.appendChild(img)
```

Reload the page and you should see this:

[TODO screenshot]

Easy!

How about some metadata? It’s handy to be able to see the size, creation time, and modify time of a file. You can get that information with `stat`. Add this to the end of main:

```js
  var indexJsStat = await archive.stat('/js/index.js')
  console.log(indexJsStat)
```

Reload the page and you should see this:

[TODO screenshot]

The output is made to mimic the output of node.js’ stat() call. The attributes you’ll mostly be interested in are `size`, `mtime`, and `ctime`. Note, however, that mtime and ctime aren’t verified and they could be wrong!

One last thing: suppose you wanted to read a file in a Dat which the user will have to download first. There’s a chance that the Dat won’t be found, either because the network is down, or because the Dat isn’t being hosted by anybody.

To deal with this, Beaker sets a default timeout of 5 seconds. You can increase it, like so:

```js
   // wait 10 seconds (10000 ms) before timing out
   var beakerPng = await dat.readFile('/img/beaker.png', {encoding: 'base64', timeout: 10000})
```

Or, you can disable the timeout altogether by setting timeout to `false`.