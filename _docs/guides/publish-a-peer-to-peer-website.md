---
title: Publish a peer-to-peer website
section: guides
---

Ready to create your first website? Already have a website that you want to publish on the p2p Web? This guide is for you.

Related links:

* [What's a peer-to-peer-website?](/docs/how-beaker-works/peer-to-peer-websites)
* [Using a domain name with a dat:// site](TODO)
* [Mirroring a dat:// site to https://](TODO)

## Publish your website

TODO With Beaker or on the command line jump

<div class="beaker-dat-picker">
  <a href="" class="">
  	<span class="icon fa fa-window-maximize"></span>

  	<span class="label">
  	  With Beaker
  	</span>
  </a>

  <a href="" class="">
  	<span class="icon fa fa-terminal"></span>

  	<span class="label">
  	  On the command line
  	</span>
  </a>
</div>

### With Beaker

Open Beaker's main menu and click "Create new":

<figure>
  <img src="/img/docs/beaker-menu-create-new.png"/>
</figure>

If you've already built your website, click "From folder" to import the folder that contains your website:

<figure>
  <img src="/img/docs/beaker-menu-create-new2.png"/>
</figure>

Otherwise, click "Website" to use Beaker's basic website template, or click "Empty project" to start from scratch.

### With the Dat CLI

Install the Dat CLI:

```bash
npm i -g dat
```

Navigate to your website's directory and run the `dat` command:

<aside class="tip">
  <div class="tip-heading">
  	<span class="fa fa-lightbulb-o"></span>
  	Tip
  </div>

  <p class="tip-content">
  	If you use a static site generator, be sure to navigate to the output directory before running `dat` (or set the entry point)!
  </p>
</aside>

```bash
cd ~/src/my-website
dat .

Created new dat in /Users/alice/my-website/.dat
dat://c81299cfc139791ccc6db42f0bcac8a9af590c03828e8066478fcfc60ca6e481
```

This will create a new dat:// website with your website's files. Open the dat:// URL in Beaker and you should see your website!

Read next:

* [Using a domain name with a dat:// site](TODO)
* [Mirroring a dat:// site to https://](TODO)