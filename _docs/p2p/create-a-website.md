---
title:    Create A Website
category: Peer-to-Peer
order:    2
---

Just like [sharing files](./share-files.html), you can host a Website directly from Beaker.
In fact, it's the exact same toolset!
The difference is, in a Website, you add HTML, CSS, and Javascript.

### Step 1. Create a New Site

<img class="doc-gif" title="Creating a new site" src="/img/docs/create-new-site.gif">

### Step 2. Add HTML, CSS, and JS

<img class="doc-gif" title="Add webpages" src="/img/docs/add-webpages.gif">

If you want the site to load a webpage automatically, make sure you include an `index.html` file.
Otherwise, visitors to your site will be shown the file-listing instead.

### Step 3. Share the URL

<img class="doc-gif" title="Export zip" src="/img/docs/share-url.gif">

#### See also

<a class="btn btn-block" href="/docs/p2p/confidential-sharing.html"><i class="fa fa-shield" aria-hidden="true"></i> Confidential Sharing</a>
<a class="btn btn-block" href="/docs/devtools/cli.html"><i class="fa fa-terminal" aria-hidden="true"></i> Command Line Tools</a>
<a class="btn btn-block" href="/docs/devtools/dns.html"><i class="fa fa-globe" aria-hidden="true"></i> Domain Names</a>

---

### Mini-FAQ

**Q: How does a P2P site differ from a normal Website?**

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
 2. Use the [dat command-line tool](/docs/devtools/cli.html).