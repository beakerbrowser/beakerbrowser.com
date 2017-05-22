---
title: Code: Write site files
section: tutorials
sectionTitle: Tutorials
order: 7
---

The [DatArchive API] provides a simple set of APIs to write files and create directories. After instantiating an archive instance, you can call mkdir() and writeFile().

First, [create a new Dat site using this template]. Open the site, then open its devtools and paste this code into the console:

```js
DatArchive.create({title: 'Write site files tutorial'}).then(archive => {
  localStorage.targetDatURL = archive.url
  console.log('Created and saved!')
})
```

When you run this snippet, you’ll see the following dialog appear. Hit ‘Create site’:

[TODO screenshot]

You should see this appear in your devtools console:

[TODO screenshot]

We now have a Dat which our site can write.

In `js/index.js`, add the following code. This will create an instance of the Dat we just created.

```js
async function main () {
  // create an archive instance for our created dat
  if (!localStorage.targetDatURL) {
    return
  }
  var archive = new DatArchive(localStorage.targetDatURL)
  console.log(await archive.readdir('/'))
}
```

Refresh the page, and you should see this:

[TODO screenshot]

As you can see, the archive is empty. Let’s change that by adding a folder. Add the following snippet to the end of your main function:

```js
  try {
    await archive.mkdir('/stuff')
    console.log('Created /stuff')
  } catch (e) {
    console.log('Failed:', e)
  }
```

If you refresh the page, you should see this:

[TODO screenshot]

If you refresh the page again, you should see this:

[TODO screenshot]

This is expected. After creating the folder, you can’t create it again.

Now let’s add a file! Add this to the end of your main function:

```js
  await archive.writeFile('/hello.txt', 'world')
  console.log('Wrote', archive.url + '/hello.txt')
```

If you refresh the page, you should see something like this:

[TODO screenshot]

If you open that URL, you’ll see this:

[TODO screenshot]

Very simple! Now let’s try a binary file. Add this to your main function:

```js
  var thisArchive = new DatArchive(window.location.toString())
  var beakerPng = await thisArchive.readFile('/img/beaker.png', 'base64')
  await archive.writeFile('/beaker.png', beakerPng, 'base64')
  console.log('Wrote', archive.url + '/beaker.png')
```

If you refresh the page, you should see something like this:

[TODO screenshot]

If you open that URL, you’ll see this:

[TODO screenshot]

Now you can create folders and write files. This is great, but so far you’ve only made those changes to the staging area. Next, [read about how to commit those changes to the archive.]