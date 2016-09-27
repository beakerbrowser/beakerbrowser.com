---
title:    Create A Website
category: Guides
order:    2
---

[Follow the Sharing Files guide](/docs/guides/share-files.html) to learn how to create a new files archive.

To make the archive a website, add HTML, CSS, and JS files to the archive.
Be sure to include an `index.html` file -- this will act as the front page.
Anybody that opens the archive's URL will see your front page, and be able to open the subpages as links.

If you plan to add dynamic behaviors with Javascript, you should look at the [Dat API](/docs/apis/dat.html).

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

#### See also

<a class="btn btn-block" href="/docs/guides/confidential-sharing.html"><i class="fa fa-shield" aria-hidden="true"></i> Confidential Sharing</a>
<a class="btn btn-block" href="/docs/devtools/cli.html"><i class="fa fa-terminal" aria-hidden="true"></i> Command Line Tools</a>
<a class="btn btn-block" href="/docs/devtools/dns.html"><i class="fa fa-globe" aria-hidden="true"></i> Domain Names</a>

### Mini-FAQ

**Q: How does a Dat site differ from a normal Website?**

Other than the diference in protocols, Dat sites are more tightly "sandboxed."
They are not allowed to access the network.
That means you can't embed YouTube videos, use Google Analytics, or make Ajax requests home.
This is to protect the privacy of users.

**Q: Is there a faster way to develop a site?**

Yes!
You can make your development time much faster by [using the dat command-line tool](/docs/devtools/cli.html).