---
title: 'Code: Diff, commit, revert'
section: tutorials
sectionTitle: Tutorials
order: 8
---

The [DatArchive API](/docs/apis/dat.html) provides a simple set of APIs to manage the staging area. After instantiating an archive instance and making changes, you can call `diff()`, `commit()`, and `revert()`.

## diff

Start with the [site you created in the Writing site files tutorial](http://localhost:4000/docs/tutorials/write-site-files.html). Add the following code to the end of the main function:

<figcaption class="code">js/index.js</figcaption>
```js
console.log(await archive.diff())
```

You should see this in your devtools console:

<figure>
<img src="/img/docs/tut-diff-commit-revert/diff.png" >
<figcaption>The output of archive.diff()</figcaption>
</figure>

This describes the changes between the staging area and the archive’s published state. Right now, there are three uncommitted additions.

<figcaption class="code">diff() output schema</figcaption>
```js
[
  {
    change: 'add' | 'mod' | 'del'
    type: 'dir' | 'file'
    path: String (path of the file)
  },
  ...
]
```

From here, you have two options: you can call `commit()` to write all changes to the archive, or `revert()` to undo all changes.

## commit

Let’s go ahead and commit. Replace the earlier addition to main with this:

<figcaption class="code">js/index.js</figcaption>
```js
console.log(await archive.commit())
```

Refresh the page and you should see this:

<figure>
<img src="/img/docs/tut-diff-commit-revert/diff.png" >
<figcaption>The output of archive.commit() is the same as before</figcaption>
</figure>

The output is unchanged from `diff()`. That's because it describes the changes that were committed. You can confirm the commit by opening the target site in your library, and checking the history tab:

<figure>
<img src="/img/docs/tut-diff-commit-revert/history.png" >
<figcaption>The history of the target archive</figcaption>
</figure>
