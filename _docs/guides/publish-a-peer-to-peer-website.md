---
title: Publish a peer-to-peer website
section: guides
sectionUrl: /docs/guides
sectionTitle: Guides
author: Tara Vancil
authorLink: https://taravancil.com
authorAvatar: /img/team/taravancil.jpg
description: Ready to create your first website? Already have a website that you want to publish on the p2p Web? This guide is for you.
---

<p class="accent">
  Ready to create your first website? Already have a website that you want to publish on the p2p Web? This guide is for you.
</p>

Related links:

* [What's a peer-to-peer-website?](/docs/how-beaker-works/peer-to-peer-websites)
* [Using a domain name with a dat:// site](/docs/guides/use-a-domain-name-with-dat)

{% include dns-aside.html %}

## Publish a website with Beaker

Open Beaker's main menu and click "Create new":

<figure>
  <img src="/img/docs/beaker-menu-create-new.png"/>
</figure>

If you've already built your website, click "From folder" to import the folder that contains your website:

<figure>
  <img src="/img/docs/beaker-menu-create-new2.png"/>
</figure>

Otherwise, click "Website" to use Beaker's basic website template, or click "Empty project" to start from scratch.

Beaker will automatically create a new `dat://` website that you can edit using [Beaker's built-in editor](/docs/tour/#4-beakers-built-in-editor) or [your preferred text editor](/docs/tour/#using-your-own-editor).

## Publish a website with the Dat CLI

Install the Dat CLI:

```bash
npm i -g dat
```

After installing `dat`, navigate to your website's directory and run the `dat` command:

<aside class="tip">
  <span class="fas fa-lightbulb"></span>

  <p class="tip-content">
  	If you use a static site generator, be sure to navigate to the output directory before running <code>dat</code> (or set the <a href="/docs/apis/manifest#web-root"><code>web_root</code></a> to the output directory)
  </p>
</aside>

```bash
cd ~/src/my-website
dat .

Created new dat in /Users/alice/my-website/.dat
dat://c81299cfc139791ccc6db42f0bcac8a9af590c03828e8066478fcfc60ca6e481
```

This will create a new `dat://` website with your website's files. Open the `dat://`` URL in Beaker and you should see your website!

## Further reading

* [Using a domain name with `dat://`](/docs/guides/use-a-domain-name-with-dat)
* [Manage your website with `homebase`](https://github.com/beakerbrowser/homebase)