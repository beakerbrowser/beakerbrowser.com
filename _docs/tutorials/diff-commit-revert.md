---
title: Code: Diff, commit, revert
section: tutorials
sectionTitle: Tutorials
order: 8
---

The [DatArchive API] provides a simple set of APIs to manage the staging area. After instantiating an archive instance and making changes, you can call diff(), commit(), and revert().

Start with the [site you created in the Writing site files tutorial]. Add the following code to the end of the main function:

```js
  console.log(await archive.diff())
```

You should see this in your devtools console:

[TODO screenshot]

This describes the changes between the staging area and the archive’s published state. Here’s what the output can include:

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

From here, you have two options: you can call `commit()` to write the changes to the archive, or `revert()` to undo all changes. (Currently you can only commit or revert all files in staging.)

Let’s go ahead and commit. Replace the earlier addition to main with this:

```js
  console.log(await archive.commit())
```

Refresh the page and you should see this:

[TODO screenshot]

That describes the changes that were committed. You can confirm the commit by opening the target site in your library, and checking the history tab:

[TODO screenshot]