---
title: Welcome to Beaker
section: usingBeaker
sectionTitle: Using Beaker
order: 1
class: dark
---

Beaker is a new kind of browser that gives you the power to create websites,
share files, and control your data. It's an evolving reimagination of the Web,
and we're excited to have you on the journey with us. Welcome!

<img data-src="/img/logo/256x256.png" style="display: block; margin: 3em auto">

<section markdown="1">

## A peer-to-peer Web

At the heart of Beaker is a **peer-to-peer network** for sharing all kinds of
content.

It lets you skip the middle man and share data directly with your
friends and colleagues. P2P networks are fantastic for sharing information
privately, and they work great for publishing to a broad audience too!

<figure>
<img data-src="/img/docs/tour-site-peer-count.png">
</figure>

</section>

<section markdown="1">

## Using Beaker

### Share personal files

Create a site, add the files, and send the URL to your recipient (e.g., using a
chat program). It's encrypted from end-to-end so that you have total privacy.

### Make webpages

Create a website, add HTML/CSS/JS, and publish its URL, e.g., on Twitter.
Visitors can even save your website to their device for offline use!
[You can host in the
cloud too.](/docs/tutorials/host-outside-of-beaker.html)

### Hack on P2P apps

Create a site, then build your app
using the [new Web APIs in Beaker](/docs/apis/). Every app is hostless, and
ships with forkable source code.

### Browse the Web

Of course, Beaker works great as a regular Web browser too. It's built using
Chromium, the Free and Open Source engine from Google Chrome.

</section>

<section markdown="1">

## How to create a website

If you want to share files, make webpages, or hack on apps, you'll need to
create a site.

<figure>
<img data-src="/img/docs/tour-new-site.jpg">
</figure>

</section>

<section markdown="1">

## Adding files to a site

You can add files to a site by pressing the "Add files" button.

<figure>
  <img class="screenshot" src="/img/docs/tour-import-files1.png"/>
</figure>

You can also open the folder in your explorer, and make changes directly.

<figure>
  <img class="screenshot" src="/img/docs/tour-new-site-publish1.png"/>
</figure>


</section>

<section markdown="1">

## Publishing files and changes

When you're ready to share your files, click "Review changes," and then "Publish."

Even if somebody has the URL of your site, they won't be able to access the
updates to your files until you publish them. This gives you the opportunity
to review your changes before they're public.

<figure>
  <img class="screenshot" src="/img/docs/tour-new-site-publish3.png"/>
</figure>

</section>

<section markdown="1">

## How to share a website

When you're ready to share your work, simply share the URL with your recipients.

<figure>
  <img class="screenshot" src="/img/docs/tour-share-site1.png"/>
</figure>

<figure>
  <img class="screenshot" src="/img/docs/tour-share-site2.png"/>
</figure>

</section>

<section markdown="1">

## How to manage your websites

All of the websites you create with Beaker are kept in your "Library". You can
find a link to it in your main menu.

<figure>
  <img class="screenshot" src="/img/docs/tour-library1.jpg"/>
</figure>

</section>

<section markdown="1">

## Live reloading

As the author of a site, or just as a remote recipient, live reloading makes it
easy to stay abreast of changes while you work. Turn it on to have the page
automatically update every time you make a change.

<figure>
  <img class="screenshot" src="/img/docs/tour-livereloading.png"/>
</figure>

</section>

<section markdown="1">

## Offline sync

As the visitor to a site, you may want to save a site for offline reading.
Turn on "Offline sync" to access a website while you're offline. Beaker will
synchronize any updates made to the website whenever you reconnect to the Internet.

<figure>
  <img class="screenshot" src="/img/docs/tour-sync-for-offline2.png"/>
</figure>

</section>

<section markdown="1">

## Forking a website

Sometimes, you want to create a new copy of a site that you don’t control. This is
called "Forking" the site, and it's very convenient in Beaker.

<figure>
  <img class="screenshot" src="/img/docs/tour-fork1.jpg"/>
</figure>

</section>

<section markdown="1">

## Ignoring files with .datignore

Beaker supports a `.datignore` file in the root folder of sites, which you can use to specify files and folders which should not be published in the site archive. The list can include `*` globs to match against patterns.

<figcaption class="code">A common .datignore</figcaption>
```
.DS_Store
node_modules
*.log
```

</section>
