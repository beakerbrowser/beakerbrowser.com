---
title: All about seeding
section: howBeakerWorks
sectionTitle: How Beaker Works
sectionUrl: /docs/how-beaker-works
---

<p class="accent">
    With <a href="https://datproject.org"><code>dat://</code></a> Beaker makes it possible to publish websites and files from your own computer, but how do you make sure those files stay online, and what happens when you turn off your computer?
</p>

With Beaker you can publish and share a website without needing to set up a server, but when you turn Beaker off, unless some other participant on the network is *seeding* your website, its files won't stay online.

## Seeding, hosting, pinning, say what?

*Seeding* is the process of *re-uploading* or *re-sharing* a file on a peer-to-peer network. You might also hear it called pinning, hosting, re-hosting, or re-uploading, but in Beaker, we usually call it seeding.

In a peer-to-peer network, participants connect directly to one another, requesting and sharing files. While a server-like device may be one of the participants on the network, a server has no special permissions or responsibilities—instead, each participant contributes bandwidth and storage resources to help transport files.

### Etiquette on peer-to-peer networks

When you download a file on a peer-to-peer network, it's important to also re-upload or *seed* it to make sure that the network stays healthy! The network works best when all participants share the burden of transporting files.

## Seeding and Beaker 

When you visit a `dat://` website with Beaker, you temporarily seed the files you've downloaded. When you navigate away from the website or close its tab, you will no longer be seeding its files.

You only seed files that you explicitly view or download. For example, if the website has a video file, but you don't navigate to a page that loads the video, you will not download or seed the video. 

### Manually controlling seeding 

If you want to continue seeding a website after you visit it, you can use the seeding menu in Beaker's URL bar:

<img src="/img/docs/tour/seeding-menu.png"/>

## Keeping your p2p website online

It's not  practical to keep your computer on all the time, but don't worry! There are plenty of other ways to keep your website's files online:

- Ask a friend to help seed your files with Beaker's [seeding menu](#manually-controlling-seeding)
- Share your website's URL with a seeding service like [Hashbase](https://hashbase.io)
- Or if you're feeling ambitious, set up your own seeding server with a tool like [`homebase`](https://github.com/beakerbrowser/homebase)