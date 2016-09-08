---
title:    Add Webpages
category: Peer-to-Peer
order:    2
---

A P2P site doesn't need webpages to be interesting &mdash; it can just be a collection of files.
If you want webpages, though, you can add them just like [creating a site](./create-a-site.html):

<img class="doc-gif" title="Add webpages" src="/img/docs/add-webpages.gif">

If you want the site to load a webpage automatically, make sure you include an `index.html` file.
Otherwise, visitors to your site will be shown the file-listing instead.

---

### Mini-FAQ

**Q: How does a P2P site differ from a normal site?**

Other than the diference in protocols, P2P sites are more tightly "sandboxed."
They are not allowed to access the network at all.
That means you can't embed YouTube videos, use Google Analytics, or make Ajax requests home.
This is to protect the privacy of users.

Over time, we'll add features for P2P sites to request extra privileges.
Right now, your site will just need to be self-contained.

**Q: Is there a faster way to develop a site?**

Yes!

Dragging-and-dropping the files, each time you make a change, can be pretty slow!
You can make your development time much faster, with one of these techniques:

 1. Use an HTTP server on your computer. For instance, if you blog with [Jekyll](https://jekyllrb.com/), you can use its builtin 'serve' command. When you're ready to publish, drag-drop the files into your site.
 2. Use the [dat command-line tool](/docs/advanced/cli-tools.html).