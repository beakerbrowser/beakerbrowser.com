---
title:    Create A Website
category: Guides
order:    2
---

<span class="label label-gray">Guide</span>
<span class="label label-green">Difficulty: Easy</span>

<hr class="nomargin">

[Follow the Sharing Files guide](/docs/guides/share-files.html) to learn how to create a new files archive.

To make the archive a website, add HTML, CSS, and JS files to the archive.
Be sure to include an `index.html` file -- this will act as the front page.
Anybody that opens the archive's URL will see your front page, and be able to open the subpages as links.

Here is an example `index.html` to get you started:

```html
<html>
  <head>
    <title>New Website</title>
    <link rel="icon" href="/favicon.png">
  </head>
  <body>
    <h1>New Website</h1>
    <p>This is a brand-new website, created with <a href="https://beakerbrowser.com">Beaker</a>!</p>
    <img src="/beaker.png">
  </body>
</html>
```

And here are the images that it references (place them at the top-level of the archive):

 - [favicon.png](/img/favicon.png)
 - [logo.png](/img/logo/256x256.png)

<hr class="nomargin">

### How does a Dat site differ from a normal Website?

Dat sites are more tightly sandboxed.
By default, they are only allowed to make GET requests to other `dat://` archives. 
That means you can't embed YouTube videos, use Google Analytics, or make Ajax requests home.
This is to protect the privacy of users.

Dat sites are also able to access Beaker's APIs, such as the [Dat API](/docs/apis/dat.html), while regular web pages can not.

<hr class="nomargin">

### Authoring from the Command Line 

You can make your development faster by [using the dat command-line tool](https://github.com/datproject/dat).
Create a folder to contain your site's assets, then serve is as an archive with this command:

```bash
cd ~/my-site-directory
dat .
```

The dat command will add a `.dat` directory, which contains the private key and metadata.

<div class="technical-explanation" data-title="Beware!">
  <div class="icon"><span class="fa fa-exclamation-triangle"></span></div>
  <div class="body">
    <p>
      Do not share the <code>.dat</code> folder!
      It contains your private key.
      If you use git, make sure the folder is not put into the repository.
    </p>
  </div>
</div>

The dat command watches the folder and automatically updates the archive when it detects changes.
This is very handy, except it can create a long history while you are developing your site.

To solve this problem, create a temporary, in-memory archive during development with this command:

```bash
dat . --temp
```

That way, your changes aren't written to the final archive.
When you've finished making changes, serve the production archive again with `dat .`.

If you plan to share the site publicly, [consider using a cloud host](/docs/guides/cloud-hosting.html). 

<hr class="nomargin">

#### See also

<a class="btn btn-block" href="/docs/guides/cloud-hosting.html"><i class="fa fa-cloud" aria-hidden="true"></i> Cloud Hosting</a>
<a class="btn btn-block" href="/docs/cli.html"><i class="fa fa-terminal" aria-hidden="true"></i> Command Line Tools</a>
<a class="btn btn-block" href="/docs/guides/dns.html"><i class="fa fa-globe" aria-hidden="true"></i> Domain Names</a>
