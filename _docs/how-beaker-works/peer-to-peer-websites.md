---
title: Peer-to-peer websites
section: howBeakerWorks
sectionTitle: How Beaker Works
order: 3
---
<p class="accent">
  Websites hosted over <code>dat://</code> are often called peer-to-peer websites. What
  exactly <em>is</em> a peer-to-peer website anyway?
</p>

## But first, what's a website?

A website can be many things, but put most simply, it's a folder that contains
files (and sometimes other folders)! The files inside of a website can be
photos, `.txt` files,`.csv` files, or any other type of file.

Most commonly when we visit a website, its files are transported to your browser
via [HTTP](https://developer.mozilla.org/en-US/docs/Web/http), and the browser
displays a rendering of
[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) files styled with
[CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics),
and with interaction behavior defined by
[JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript).

TODO a graphic of a folder with a bunch of files spilling out of it.

For example, a simple website could contain an `index.html` file
with inline CSS styles and a `<script>` tag that defines some JavaScript (JS)
behavior:

<figcaption class="code">index.html</figcaption>
```
<html>
  <style>
    body {
      color: blue;
    }
  </style>

  <body>
    <h1>Hello, world!</h1>

    <p id="javascript-content"></p>
  </body>

  <script>
    var jsContent = document.getElementById("javascript-content")
    jsContent.innerText = "Hello from JavaScript!"
  </script>
</html>
```

TODO aside the building blocks of the web. see mdn html, css, js docs for inspiration

## So what's a peer-to-peer website?

A peer-to-peer website works just like any other website, but instead of being
transported with HTTP, a peer-to-peer website's files are transported
(perhaps unsurprisingly) with a peer-to-peer protocol.

Instead of being hosted on a server, the files of a peer-to-peer website can be
hosted from any computer! This means that you can publish a website from your personal
computer, and your website's visitors, friends, pet dog, or anyone else on the
peer-to-peer network can help keep your website's files online.

## Keeping a peer-to-peer website online

Peer-to-peer websites are exciting because they enable *anyone*
to create and publish a website without needing to know how to run a server.
As long as someone else on the network is **seeding** your website's files, it
will stay online.

<aside>
  <div>
    <h3 class="title">Seeding, hosting, pinning, say what?</h3>

    <p>
      On a p2p network, peers can re-upload the content they download.
      In Beaker, we call this  <strong>seeding</strong>, but you might also hear
      it called <strong>hosting</strong> or <strong>pinning</strong>.
    </p>
  </div>

  <img class="icon" src="/img/icon/seeding.svg" />
</aside>

But what happens if your friends shut off their computers and no one is online
to help seed your website's files? Sadly, your website won't be accessible. If
you've ever used BitTorrent, you probably remember what it's like to download
a file without any active seeders.

### Other ways to seed a peer-to-peer website

It's not practical to keep your laptop always on, but don't worry! There are
other ways to keep your website's files online:

- Ask your friends to help seed your website
- Share your website's URL with a seeding service like [Hashbase](https://hashbase.io)
- Or if you're feeling ambitious, set up your own seeding software like [dathttpd](https://github.com/beakerbrowser/dathttpd)

TODO prompt the peron to create their first p2p website

