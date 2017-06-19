---
layout: post
title: Cryptographically-secure change feeds in the Dat protocol, and on the Web
author: Paul Frazee
authorLink: https://twitter.com/pfrazee
avatar: /img/team/pfrazee.jpg
image: /img/posts/cryptographically-secure-change-feeds/thumbnail.png
excerpt: |
  Dat uses an append-only feed that’s inspired by Certificate Transparency to create auditable change logs in file archives. We use this to deliver Web applications securely in Beaker.
---

**TL;DR: Dat uses an append-only feed that’s inspired by Certificate Transparency to create auditable change logs in file archives. We use this to deliver Web applications securely in Beaker.**
 
The [Decentralized Archive Transport (Dat) Protocol](https://beakerbrowser.com/docs/inside-beaker/) uses append-only feeds to internally represent its file archives. Each time you make a change, a `put` or a `del` is appended to the feed.
 
```
rev1. put /index.html '<h1>hi!</h1>'
rev2. put /styles.css '* { color: red }'
rev3. put /styles.css '* { color: blue }'
rev4. put /main.js    'console.log("hi")'
```
 
This is how the archive is versioned. Each change creates a revision, and each revision can be kept for later reading. This enables historic checkouts:
 
```js
archive.checkout(2).readFile('/styles.css')
// => '* { color: red }'
```
 
Here's another example:
 
```js
// revision 2 doesnt have a main.js yet
archive.checkout(2).readdir('/') => ['index.html', 'styles.css']
```
 
In Beaker, you can access historic versions of sites by URL. Here, for instance, is the URL to revision 100 of our website: [dat://beakerbrowser.com+100/](dat://beakerbrowser.com+100/).
 
## Dissecting the feed
 
So now we know there’s an append-only feed inside the files archive. But, what’s inside the append-only feed?
 
Internally, Dat represents the append-only feed with a signed merkle tree.

<figure>
<img src="/img/posts/cryptographically-secure-change-feeds/signed-tree.png" >
<figcaption>The signed merkle-tree</figcaption>
</figure>
 
The hashes of the entries in the feed act as the leaves of the tree. Each time an entry is added, a matching leaf is added, and the tree produces a new root.
 
<figure>
<img src="/img/posts/cryptographically-secure-change-feeds/growing-tree.gif" >
<figcaption>Entries added to the append-only feed<br>will grow the tree</figcaption>
</figure>
 
Each root hash is signed. Consumers of the feed will already have the public key, because the file archive is addressed by its public key, so they can easily check the signature.

This provides authentication and integrity. Now, what about the append-only constraint?
 
## Enforcing the append-only constraint

It’s important that the change-feeds *really are* append-only.
 
Why? In Beaker, Dat archives contain Web applications. Our goal is to support end-to-end secrecy of user data, so it's very important that we can trust the software.

<aside class="highlight">
  One reason that the Web has historically lacked end-to-end secrecy is that all Web applications have to trust a third party — the host. But this deficiency is unique to the services-based Web. In the peer-to-peer Web, the application has no host, and we can use signatures and integrity checks to audit the software.
</aside>
 
We want a "uniform distribution" of all applications. If it were possible for a developer to distribute multiple versions of their code, then they could deliver one version of the app to most users, and deliver a compromised version to a single target. We call this a "targeted payload" attack.

In Dat, this would be visible as multiple histories to the archive.
 
<figure>
<img src="/img/posts/cryptographically-secure-change-feeds/targeted-payloads.png" >
<figcaption>The targeted payload creates its own alternate history</figcaption>
</figure>
 
 
To prevent targeted payloads, it’s important that all peers receive the exact same changes feed. That way, it’s not possible to compromise the application for one single user: the attack has to be distributed to all users, where it’s more likely to be noticed.
 
The signed Merkle tree helps us accomplish that goal. In the Merkle tree, the root hash represents the full history of feed. If you make a change to the history, the root will change.
 
Therefore, any recipient can query other peers to ask, “Is this the same root hash that you have?”

<figure>
<img src="/img/posts/cryptographically-secure-change-feeds/checkin.gif" >
<figcaption>Peers compare their root hashes</figcaption>
</figure>
 
If the hashes don’t match, then the consumer knows they have been tricked. And because the hashes are signed, the consumer can prove to the network that the author created a split history.
 
<figure>
<img src="/img/posts/cryptographically-secure-change-feeds/snitch.gif" >
<figcaption>A peer that finds mismatched hashes can alert the network</figcaption>
</figure>
 
If any of this sounds familiar, it might be because this is the [same design used by Certificate Transparency to create its auditable certificate logs](https://www.certificate-transparency.org/log-proofs-work). The Dat protocol has generalized the structure, for distributing data feeds and file archives (and, soon, KV databases).
 
This feature is one of the reasons we chose the Dat protocol: it has paranoia built in!
 
## What about a blockchain?
 
Some people have noted: if you want to have a high degree of auditability, why not use a blockchain?
 
### The argument for blockchains
 
Blockchains enforce global consensus on writes. Therefore, the same goal of auditability could be accomplished by writing the archive histories to the blockchain. In fact, in some ways this would be more secure, because it would *force* consumers to check in with the global network before accepting an archive.
 
### The argument against blockchains
 
It involves more overhead than is necessary. Using a blockchain means that an author needs to be connected to the global network to complete writes. This is slower than Dat’s local writes, and requires a transaction fee. Further, it leads to a bloated history, as all peers running the blockchain will have to synchronize every archive history that’s published. Did we mention it's slower?
 
We think the signed Merkle tree provides the right tradeoff of efficiency and security.
 
 
## Wrapping up
 
To summarize: The Dat protocol uses an append-only feed to internally represent its file archives. The feed represents the changes that have occurred to the archive, and can be used to pull old versions from history.
 
The append-only feed is constructed as a signed Merkle tree, to verify authorship and data integrity. The protocol uses the root hashes of the tree to enforce the append-only constraint, thereby reducing the potential for targeted payloads.
 
This is a powerful featureset that radically improves the transparency of data and software, and it’s one of the key reasons we chose Dat over IPFS or BitTorrent.

[&mdash; @pfrazee](https://twitter.com/pfrazee)
