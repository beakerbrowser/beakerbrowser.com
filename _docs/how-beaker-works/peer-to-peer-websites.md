---
title: Peer-to-peer websites
section: howBeakerWorks
sectionTitle: How Beaker Works
---
<p class="accent">
  Websites hosted over <code>dat://</code> are often called peer-to-peer websites. What
  exactly <em>is</em> a peer-to-peer website anyway?
</p>

## But first, what's a website?

A website can be many things, but put simply, it's a folder! That folder can contain files and even other folders. The files in a website can be photos, `.txt` files,`.csv` files, or any other type of file.

Most of the time when you visit a website, its files are sent to your browser with [HTTP](https://developer.mozilla.org/en-US/docs/Web/http). Your browser displays a rendering of [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) files styled with [CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics), and with interaction behavior defined by [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript).

<!-- TODO would be cool to have a graphic with a mockup of a website's file structure -->


### Example: a simple website

```html
<html>
  <style>
    body {
      color: blue;
    }
  </style>

  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

<!-- TODO aside  with the three building blocks of  the web -->

## So what's a peer-to-peer website?

A peer-to-peer website works just like any other website, but instead of being
transported with HTTP, a peer-to-peer website's files are transported
(perhaps unsurprisingly) with a peer-to-peer protocol!

Instead of being hosted on a server, the files of a peer-to-peer website can be hosted from any computer! This means that you can publish a website from your personal computer, and your friends, your pet dog, or anyone else on the network can help keep your website's files online.

In Beaker, a peer-to-peer website is simply a folder that's been published with `dat://`. This website is a peer-to-peer website! You can visit [dat://beakerbrowser.com](dat://beakerbrowser.com) to see for yourself.

<!-- TODO we really need a graphic here -->

### Equalizing access to publishing

Peer-to-peer websites are exciting because they enable *anyone* to create and publish a website without needing to know how to run a server. As long as someone else on the network is **seeding** your website's files, it will stay online.

{% include seeding-aside.html %}

## Keeping a peer-to-peer website online

Peer-to-peer protocols like Dat make it possible to publish from your own computer, but what happens when you turn your computer off? Well, if no one else is seeding your files, your website won't be available.

### Other ways to seed a peer-to-peer website

It's not  practical to keep your computer on all the time, but don't worry! There are plenty of other ways to keep your website's files online:

- Ask a friend to help seed your files with Beaker's [seeding menu](/docs/tour/#core-concept-peers-and-seeding)
- Share your website's URL with a seeding service like [Hashbase](https://hashbase.io)
- Or if you're feeling ambitious, set up your own seeding server with a tool like [`homebase`](https://github.com/beakerbrowser/homebase)

Read next: [Peer-to-peer Web apps](/docs/how-beaker-works/peer-to-peer-applications)

<!-- TODO prompt to create first website -->