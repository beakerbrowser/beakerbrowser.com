---
title: Take a tour of Beaker
section: tour
sectionTitle: Tour
---

<p class="accent">
  Welcome! Take a quick tour to get familiar with Beaker.
</p>

## 1. Browsing with Beaker

Beaker is an experimental peer-to-peer browser. Just like other browsers, you can browse `http://` and `https://` websites:

<img src="/img/docs/tour/https-site.png"/>

### dat://

Beaker also supports a peer-to-peer protocol called [Dat](https://datproject.org), which means you can browse `dat://` websites like [dat://beakerbrowser.com](dat://beakerbrowser.com).

`dat://` websites work just like any other webpage. They're a collection of [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS), and [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/javascript) files that come together to form a webpage. Just like with `http://` websites, you can click links, download images, and use developer tools to interact with the page.

{% include dat-aside.html %}

<img src="/img/docs/tour/dat-site.png"/>

### Core concept: peers and seeding

`dat://` is a peer-to-peer protocol, which means that visitors to a `dat://` site connect directly to one another, downloading and sharing files. Participants on the network are called <em>peers</em>, and when a peer contributes bandwidth to re-upload a site's files, it's called <em>seeding</em>.

{% include seeding-aside.html %}

You can see the peer count for a `dat://` site in the URL bar:

<img src="/img/docs/tour/peer-count.png"/>


When you visit a `dat://` site with Beaker, you temporarily seed its files. If you want to contribute resources to that site for longer, you can use the seeding menu in the URL bar:

<img src="/img/docs/tour/seeding-menu.png"/>


If you visit an `https://` website that also supports `dat://`, you'll see this indicator in Beaker's URL bar:

{% include dns-aside.html %}

<img src="/img/docs/tour/well-known.png"/>


## 2. View Source

`dat://` websites are unique because you can inspect all the files that make up a website. To explore a `dat://` website's files, click "View Source" in the site's dropdown menu:

<img src="/img/docs/tour/view-source-menu.png"/>

This is Beaker's View Source tool. You can view any `dat://` site and its files with View Source:

<img src="/img/docs/tour/view-source.png"/>

View Source automatically renders `README` files:

<img src="/img/docs/tour/view-source-readme.png"/>

And of course, you can inspect individual files with View Source too:

<img src="/img/docs/tour/view-source-image.png"/>
<img src="/img/docs/tour/view-source-file.png"/>

## 3. One-click publishing

One of the most compelling reasons for supporting `dat://` in Beaker is that it makes it possible to share a website from the browser with one click!

To create a website with Beaker, click "Create New" in the main dropdown menu:

<img src="/img/docs/tour/one-click.png"/>

Then choose whether to create an empty project, use our basic website template, or to import an existing project:

<img src="/img/docs/tour/one-click-2.png"/>

We'll choose the basic website template. Beaker will automatically create a new `dat://` website, populate it with a simple template, then open the website in [View Source](/docs/tour/view-source):

<img src="/img/docs/tour/one-click-view-source.png"/>

We can open the website with the link on the top right:

<img src="/img/docs/tour/one-click-website.png"/>

Just like that, we made a website! To share the website with friends, we can send them the website's URL. Anyone with the URL will be able to view the website in Beaker.

## 4. Beaker's built-in editor

Since `dat://` makes it possible to publish files directly from Beaker, wouldn't it be great if you could also edit files in Beaker? You can!

Let's open our website in View Source, then open its `index.html`:

<img src="/img/docs/tour/editor-button.png" />

If we click the edit button, we'll be able to update the HTML directly from View Source!

<img src="/img/docs/tour/editor.png" />
<img src="/img/docs/tour/editor-updated.png" />

### Using your own editor

Prefer to use Sublime, Vim, Atom, or Code to edit your projects? You can click the "Set local directory button" to sync the website's files to a directory on your computer. Any changes you make to the files in the directory will be published to the website.

<img src="/img/docs/tour/editor-local-directory.png" />

## 5. "Forking" or copying a website

You can edit websites you've created, but you can't edit other people's websites. Beaker provides a built-in tool to make an editable copy of any `dat://` website. If you're familiar with [GitHub](https://github.com), it's kind of like "forking" a project.

Making an editable copy is especially useful when you want to customize a p2p app. For example, let's say you use [dat://fritter.hashbase.io]() as your social media client, but you don't like round buttons. You could make an editable copy, then customize the CSS to change the button styles, all without losing your user data or friends list!

{% comment %}
<-- TODO an aside about customizable apps, app/data separation -->
{% endcomment %}

<img src="/img/docs/tour/forking.png" />

## 6. Live reloading

Beaker has a built-in live-reloading tool for all `dat://` pages. Turn on live reloading, and Beaker will automatically reload the page.

Live reloading works for projects you're working on locally *and* for remote projects on the peer-to-peer network!

<img src="/img/docs/tour/live-reloading.png"/>

<!-- TODO add a cta here -->

Ready to get started?

- [Install Beaker](/install)
- [What's a peer-to-peer website?](/docs/how-beaker-works/peer-to-peer-websites)
- [Make a peer-to-peer website](/docs/guides/publish-a-peer-to-peer-website)
- [Learn more about Dat](https://datproject.org)
