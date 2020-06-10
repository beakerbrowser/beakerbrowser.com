---
layout: post
title: "Beaker Roadmap: Summer 2020"
author: Paul Frazee
authorLink: https://twitter.com/pfrazee
avatar: /img/team/pfrazee.jpg
excerpt: |
  This spring, we released the 1.0 beta of Beaker Browser which included the Hypercore Protocol for peer-to-peer sites and applications. In this post, we discuss our long term vision for the project and outline our roadmap for the summer's development.
---

<div class="tldr" markdown="1">
[Beaker Browser](/) is a peer-to-peer browser and computing platform. In this post, we'll outline our development roadmap for Summer 2020. [Learn more here](/).
</div>

This spring, we released the 1.0 beta of Beaker Browser which included the Hypercore Protocol for peer-to-peer sites and applications. Since then, users have created wikis, WinAmp players, an improved fork of the microblogging app, a 2d "walk and chat" game, and over 300 personal sites.

<img src="/img/posts/roadmap-summer-2020/user-projects.png">

We're really excited about what we've seen and we're happy with the feedback we've received. The feedback has given us a lot of insight into where the Beaker APIs hold up and where they don't. Before we dig into the updates we plan to make, let's talk a little bit about the vision for Beaker.

## Mass open computing

[As we discussed in our recent talk](https://youtu.be/x3ShGXYCPWQ), our vision for Beaker is "mass open computing." We want to hack in a highly connected environment. We want forking to be trivial. We want the browser to run large-scale networked programs. We don't want servers to be a barrier to building on the Web.

If hacking is going to be fun -- and useful -- then we need powerful APIs. Devs should be able to create services that work on huge datasets. We should be building search engines, knowledge databases, and large-scale aggregators. Fun hacking also means convenient APIs. It shouldn't be hard to connect to a specific person, or to encrypt a file, or to keep data online. These are the basic building blocks of applications, and they ought to feel intuitive.

With this vision in mind, we discussed how to focus the roadmap and decided that adding more APIs and capabilities is the right focus for our summer. We outlined four priorities:

<div class="highlighted-blurb" markdown="1" style="font-weight: bold">
 1. Network-services API
 2. Background processes and Beaker Node
 3. Hypercore APIs
 4. Sodium (crypto) APIs
</div>

We've already started on each of these updates and we think most of them will be released over the summer. Let's tell the story of each one.

## Network-services API

With time running short, we initially considered shipping the 1.0 Beta without a realtime networking API -- but we decided to include [PeerSockets](https://docs.beakerbrowser.com/apis/beaker.peersockets) to gauge interest. It turns out that was a good idea because PeerSockets was the main API that people wanted to use! So let's talk about how it works currently and what's missing.

<img class="centered" src="/img/posts/roadmap-summer-2020/tods-chat-room.png">

[PeerSockets](https://docs.beakerbrowser.com/apis/beaker.peersockets) piggyback on a hyperdrive's connections to send messages. This was easy for us to implement in the 11th hour, but it doesn't guarantee that every visiting user is reachable because the protocol only establishes enough connections to receive the hyperdrive data. This makes it feel like messages aren't getting delivered.

There's also a second issue to consider: PeerSockets don't have any mechanism to connect to a specific peer. Since devs frequently want to connect to a specific user or drive-owner, we decided the best solution would be to create a separate API geared toward networked services.

A few examples of how this could be used:

 - **Social Apps**, eg a "social aggregator" that can connect you to others and display up-to-date presence information.
 - **API Services**, eg a video transcoder service which converts MP4s to `.gif` or `.avi` on request.
 - **Data Indexers**, eg a background indexer that can accept submissions to generate a personalized search engine.

The networked services API will make it possible to request connections to a specific peer using either a hyperdrive or a user-minted keypair as the identifier. With this model, we'll be able to use the DHT to efficiently discover, connect, and authenticate with the intended peer. If the connection fails, you'll get a clear error message explaining the failure. These tools will make realtime communication much clearer and easier to use.

These APIs will likely change, but here is the "low-level" design we're considering:

```javascript
// by keypair
var kp = services.createKeypair()
services.listenKeyPair(kp, {onRequest})
var conn = services.connectPublicKey(kp.publicKey)
await services.request('ping')

// by hyperdrive
services.listenAsOwner('hyper://1234..ef/', {onRequest})
var conn = services.connectToOwner('hyper://1234..ef/')
await conn.request('ping')

// the request handler
function onRequest (cmd, args) {
  if (cmd === 'ping') {
    return 'pong'
  }
  throw new Error('Invalid command')
}
```

The API will also include a way for connectors to prove ownership of Hyperdrives, enabling you to authenticate as your personal drive (for example). With these tools, realtime communication should get much easier to do, and a bunch of usecases will become much more obvious to solve.

### Background processes and Beaker Node

One frequent suggestion we receive is, wouldn't it be nice if applications could run in the background? Applications frequently require long-running processes to run services and indexing. It's not reasonable to keep a tab open for every application (whoops, closed a tab and missed our five 9s target!).

We gave a lot of consideration to a "background scripts" execution model, but realized this is much easier to solve in the UI. Instead of a special script, we'll make it possible to minimize tabs into a "Tray." The Background Tray will continue to run the tab as if it were open, but keep it out of sight. It will even run if Beaker is closed to the background. This will easily solve the long-running process model.

<img class="centered" src="/img/posts/roadmap-summer-2020/minimize-to-bg-tray.png">

The Background Tray is great for processes on your laptop, but what if you wanted to move the process to another computer? Perhaps into a cloud VMS? To solve that, we're going to start work on a headless runtime which we call "Beaker Node."

Beaker Node will mirror the environment of Beaker Browser but for the CLI. It will include the Hypercore Protocol stack and many of the Beaker APIs. With Beaker Node, it will be possible to run Beaker applications in a linuxbox or winbox sitting in the closet or in the cloud.

Beaker Node will fulfill a long-time dream of ours: to have total portability of services between the user device and "servers." By replicating the Beaker APIs in both environments, it will be possible to write code which runs anywhere. Our ideal future is that you could start a service on your device and then ship it to another device without interrupting the execution! You really shouldn't have to think that much about which device you deploy with; it should all be part of your personal mesh.

A neat minimal usecase for Beaker Node is a remote hosting service. It will be trivial to write a script that hosts Hyperdrives on request, effectively mimicking the utility of our old [Hashbase](https://hashbase.io) service. Given the right APIs, it could effectively become a full remote-computing toolset. Imagine Hashbase running your background indexers for you.

### Hypercore API

This one has been a long time coming!

Hyperdrive is a peer-to-peer filesystem built on the [Hypercore Protocol](https://hypercore-protocol.org) -- so one might ask, why isn't it called the _Hyperdrive Protocol_? It's because the network actually exchanges signed append-only logs called "hypercores." Hyperdrives are built on top of those cores.

Logs are a very flexible datastructure. They can be used to represent many kinds of data -- such as a filesystem -- and are frequently used in distributed systems. In fact, there are multiple projects (including [Cabal](https://cabal.chat/) and [Kappa-core](https://github.com/kappa-db/kappa-core)) which already use hypercores to create their data network.

The way we chose to design the 1.0 beta was to start with only hyperdrives, which helped keep things simpler. Hyperdrives are what powers websites and applications, and they can be used for certain kinds of data storage.

As an example, in Beaker every user has a personal hyperdrive. This drive acts as their identity and as a kind of datastore. The microblogging app, Blahbity-blog, works by reading and writing files in the `/microblog/` folder of personal drives. You could think of this like a social database -- or perhaps as similar to RSS -- because the feed is assembled by merging the microblog folders of each user in your address book.

While hyperdrives are perfect for the kinds of media that microblogging uses, they're not the first thing developers reach for when storing datasets or secondary indexes, or for handling [CRDTs](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type). We need something powerful enough to handle real database use-cases. We think hypercore is the answer to that.

By exposing a Hypercore API, userland will be able to build more sophisticated databases. Userland modules should be able to accept hypercores and produce APIs that feel like [leveldb](https://github.com/google/leveldb) or [kappa-core](https://github.com/kappa-db/kappa-core). This should enable a variety of interesting use-cases, from basic data storage, to video streaming, to multi-user editors, to distributed aggregation and search.

The really compelling thing about hypercores is that, like hyperdrives, hypercores are networked. You can efficiently access any entry in the log over the network -- there's no need to replay the entire log to access one entry. Like hyperdrives, hypercores will have a `hyper://` URL. Also like hyperdrives, it will be possible to mount hypercores into a hyperdrive. These mounted cores will look like "files" from the outside, but will be accessable with the hypercore API to operate on the individual log entries.

We're really excited to finally hit this API, because we think it will unlock a ton of potential in userland.

## Sodium (crypto) APIs

Finally, we have the crypto. Not that crypto. The other crypto. Specifically, [LibSodium](https://libsodium.gitbook.io/doc/).

The obvious reason to want a crypto API is to encrypt files, and an ideal future would provide multiple builtin encryption modes in Hyperdrive. For now, we're going to implement an API for encrypting blobs which can then be written to files. It's a start -- and it should open up some pretty fun use-cases, like adding private messages to our crummy "PaulMail" app.

But the big reason to add the Sodium API is Hypercore. Hashing is a key requirement for building custom datastructures on Hypercore. With the Sodium API, that will become much more convenient.

## Beaker 2020

We're really excited to launch into these updates and we hope you are too. We don't have concrete timelines for these features ("when they're ready") but we're going to start immediately, and we plan to deliver them over summer 2020. At the same time, we'll continue to fix bugs and improve the UX of Beaker.

Thank you everybody for your support and feedback! We're looking forward to getting these APIs out and seeing what you all can do with them.

If you missed them, we had two videos go online recently:

 - ["Massively Multiplayer Open Computing" (talk)](https://youtu.be/x3ShGXYCPWQ)
 - ["Intro to Beaker" (demo/workshop/q&a)](https://www.youtube.com/watch?v=zwR6YyConQI&t=3222s)

<div style="text-align: center; margin: 3em 0 0">
<a class="btn" title="Try out the Beaker Browser Today" href="/install/">Try out the Beaker Browser Today</a>
</div>