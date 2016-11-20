---
title:    Confidential Sharing
order:    3
category: Dat
---

<div class="card">
  <p>Dat enables you to host sites instantly and for free. <a href="/docs/intro.html">Read more</a>.</p>
</div>

Sites shared with the Dat protocol are, by default, secret.
Their URLs are unguessable keys which are used to encrypt the peer-to-peer traffic.
This means, if you only share the URL with your friends, then nobody else will have access to the files, or know what you are transferring.

### What's the safest way to send a URL?

For most cases, any private-messaging you use will be fine.
If you don't expect a third-party to open the links in your message, then the medium is probably safe enough.

However, total security is impossible to guarantee!
Most networks, like E-mail, SMS, Twitter, and Facebook, are not encrypted.
You shouldn't use Beaker for extremely sensitive material, or for anything illegal.

### Are the files encrypted?

The connection is encrypted, but the files themselves are not.
Once received, they are visible in plaintext.
If somebody has the URL to your site, they will be able to access the site's files.

### Am I anonymous on the network?

No.
Other users that possess the site's URL will be able to see your IP.
[Read more about how this works](http://localhost:4000/docs/dat/intro.html#security-properties).
