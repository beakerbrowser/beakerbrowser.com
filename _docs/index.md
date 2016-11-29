---
title: Beaker Browser
short_title: Introduction
order: 1
---

<a class="btn btn-primary" href="https://download.beakerbrowser.net/download/latest/osx"><i class="fa fa-apple" aria-hidden="true"></i> Download for Mac</a>
&nbsp; <a href="https://github.com/beakerbrowser/beaker">View the Source</a>

#### Beaker uses Peer-to-Peer Hypermedia Protocols to distribute the Web.

Free, independent sites.&nbsp;
<span class="fa fa-code-fork"></span> Forkable.&nbsp;
<span class="fa fa-floppy-o"></span> Offline-first.&nbsp;
<span class="fa fa-history"></span> Versioned.&nbsp;
Anybody can be a server, multiple computers can serve the same site, and there is no back end.

Get involved: <a href="https://github.com/beakerbrowser/beaker">On GitHub</a>, in the <a href="https://groups.google.com/forum/#!forum/beaker-browser">Mailing List</a>.

<hr class="nomargin">

## User Guide

After downloading Beaker, install the [bkr command-line tool](https://github.com/beakerbrowser/bkr):

```
npm install -g bkr
```

You can do everything in this guide from Beaker's builtin GUI, but we'll use the CLI.

<br>
### Create a site

Make sure Beaker is running, then run these commands:

```bash
~/ mkdir ~/my-site
~/ bkr init ~/my-site

# some questions will be asked

Created new site
dat://fdad0febf3ca58a7d115c622218838b48c3f093b33fe2798010c94bb7847e880/ # your URL will differ

```

This URL is now hosted from your device.
It can be shared with anyone in the world.

<br>
### Publish changes

Let's add an index.html:

```bash
~/my-site echo "<h1>Hello, world</h1>" > index.html
~/my-site bkr publish 1.0.0

Publishing 1.0.0 of dat://fdad0f..80
? Is this ok? Yes

5 files (821 B)
2 added, 0 updated
```

Open the site and you'll see your page:

<img src="/img/getting-started-screen-helloworld.png" class="bordered">

<br>
### Run a dev server

Publishing with bkr is similar to publishing on NPM.
It updates the site's permanent changelog, and writes a new version.

If you want to work on a site without publishing, you can create a temporary dat using the `dev` command.
This dat will stay in sync with the folder.

```bash
~/my-site bkr dev

  Building '/Users/bob/my-site'...
  Ready. Sharing at:

  dat://f53bb36ba6b49e2f55faadba44192c03357a57812d730f1974a422ff91057d7b # again, your url will differ
```

When you close `bkr dev`, the temporary site will be deleted.

<br>
### Turn on live-reloading

While you work, it can be convenient to turn on live-reloading in Beaker.
This can be done by the dropdown menu at the top right:

<img src="/img/getting-started-screen-livereload.png" class="bordered">

Now when you make changes, the page will automatically reload itself.

```bash
~/my-site echo "<p>How are you?</p>" >> index.html
```

<br>
### Inspect a site

If you want to view a site's files from Beaker, click on the title in the navbar, then click on "View Site Files."

<img src="/img/getting-started-screen-siteinfo.png" class="bordered">

You'll be presented with a file-listing, and tools to host or fork the site.

<img src="/img/getting-started-screen-datviewer.png" class="bordered">

<br>
### Fork a site

You can fork a site from Beaker or the CLI.

```
~ bkr fork dat://fdad0febf3ca58a7d115c622218838b48c3f093b33fe2798010c94bb7847e880/ ~/my-new-fork

Forking dat://fdad0f..80, please be patient...

Checking out into /Users/bob/my-new-fork
2 files created
New url: dat://1322af7a09027ff2b80b250ae410e33873a788000066a9996365095838d02069
```

<br>
### bkr commands

Learn more about bkr at [https://github.com/beakerbrowser/bkr](https://github.com/beakerbrowser/bkr).

```bash
Usage: bkr <command> [opts...]

  init [directory]
  co <dat-link> [directory]
  fork <dat-link|directory> [directory]

  dev [directory]

  status [directory]
  pull [--live] [directory]
  publish [major|minor|patch|{version}] [directory]

  ls [--mine]
  add <dat-link|dat-ref>
  rm <dat-link|dat-ref>
  host <dat-link|dat-ref>
  unhost <dat-link|dat-ref>
```

<br>
### Further Reading

 - About the [Dat Protocol](/docs/dat/intro.html)
 - The [Dat Web API](/docs/apis/dat.html)
 - The [Permissions API](/docs/apis/permissions.html)
 - The [Dat.json Manifest](/docs/apis/manifest.html)
 - [Frequently Asked Questions](/docs/faq.html)

<hr>

Beaker supports the [Dat Protocol](/docs/dat/intro.html) under the `dat://` scheme, and the [IPFS Protocol](https://ipfs.io) under the `fs:/` scheme.
Dat is built-in, and will run automatically at startup.
IPFS requires the daemon to be active to run.