---
title:    Technology
order:    2
category: Documentation
---

Beaker integrates two P2P hypermedia protocols:

 - The [Dat Protocol](http://dat-data.com), called "Hyperdrive".
 - The [IPFS Protocol](https://ipfs.io) (requires the external daemon).

<table class="doc-table bold-headings">
  <thead>
    <tr><td colspan="2">Dat and IPFS Features</td></tr>
  </thead>
  <tbody>
    <tr><td>Publishing</td><td>Users can author and host sites directly from Beaker.</td></tr>
    <tr><td>Offline-First</td><td>Sites can be saved permanently and run without the network.</td></tr>
    <tr><td>Forking</td><td>Users can duplicate any site with one click.</td></tr>
    <tr><td>Security</td><td>Sites are sandboxed from the network by permission walls.</td></tr>
    <tr><td>Shortnames</td><td>DNS gives human-readable names.</td></tr>
    <tr><td>Live-Reload</td><td>Automatically refresh the page as you work.</td></tr>
  </tbody>
</table>

And more on the way:

<table class="doc-table bold-headings">
  <thead>
    <tr><td colspan="2">In Development</td></tr>
  </thead>
  <tbody>
    <tr><td>Versioning</td><td>Dat sites will support version tags, eg <code>@2.1.0</code>.</td></tr>
    <tr><td>APIs</td><td>Programmatically store and share files on the P2P networks.</td></tr>
  </tbody>
</table>

<br>

<h3>About the IPFS Protocol</h3>

[You can read about IPFS here.](https://ipfs.io/#how)

<br>

<h3>About the Dat Protocol</h3>

Dat's protocol, Hyperdrive, is most easily described as "Git meets BitTorrent."
It connects users in a P2P system, and distributes archives with their change-logs.

**Summary**

 - A Dat "archive" behaves like a self-contained folder of files.
 - The archive is addressed by a public key. All updates are signed, and the files are referenced by content-hash. This ensures all users receive the same data, regardless of the source.
 - The full history of changes is retained in a metadata log. This can be used by peers to lookup specific versions of a file. The log is append-only, and can not be modified after it has been distributed.
 - As in BitTorrent, multiple peers can be used simultaneously to download data. Users connect to "discovery networks" to look up peers with the files they need. Hyperdrive deduplicates data to make syncing as efficient as possible.

Because Hyperdrive was built for the [Dat Project](http://dat-data.com), its links start with `dat://`.
When you browse to a `dat://` site, this is what happens:

**Phase 1: Source discovery**

First, Beaker asks discovery networks for sources that have a copy of the data you requested.
It receives the IP and port of all the known data sources online. 
Beaker can then connect to them and begin exchanging data.

By introducing this discovery phase, we create a network where data can be found, even if the original data source disappears.
The discovery protocols that Beaker uses are <a href="https://en.wikipedia.org/wiki/Name_server">DNS name servers</a>, <a href="https://en.wikipedia.org/wiki/Multicast_DNS">Multicast DNS</a> and the <a href="https://en.wikipedia.org/wiki/Mainline_DHT">Kademlia Mainline Distributed Hash Table</a> (DHT).
Each one has pros and cons, so we combine all three to increase the speed and reliability of discovering data sources.

Beaker uses a <a
href="https://www.npmjs.com/package/dns-discovery">custom DNS
server</a> and a <a
href="https://github.com/bittorrent/bootstrap-dht">DHT bootstrap</a>
server run by the Dat-Project Team.
These discovery servers are the only centralized infrastructure we need, but they are redundant, interchangeable, never see the actual data being shared, and anyone can run their own.

**Phase 2: Source connections**

Now that Beaker knows who to talk to, the next step is to connect to them.
We support both <a href="https://en.wikipedia.org/wiki/Transmission_Control_Protocol">TCP</a> and <a href="https://en.wikipedia.org/wiki/Micro_Transport_Protocol">UTP</a> sockets for the actual peer to peer connections.
UTP is nice because it is designed to <em>not</em> take up all available bandwidth on a network (e.g. so that other people sharing your wifi can still use the Internet).

When Beaker gets the IP and port for a potential source, it tries to connect using all available protocols and hopes one works.
If one connects first, Beaker aborts the other ones.
If none connect, Beaker tries again until it decides that source is offline or unavailable to use and it stops trying to connect to them.

If Beaker gets a lot of potential sources, it picks a handful at random and keeps the rest around as additional sources to use later, in case it decides it needs more sources.

**Phase 3: Data exchange**

So now Beaker has found data sources and connected to them.
This is where Hyperdrive comes in.
The short version of how Hyperdrive works is: It breaks file contents up in to pieces, hashes each piece and then constructs a <a href="https://en.wikipedia.org/wiki/Merkle_tree">Merkle tree</a> out of all of the pieces.

The long version:

Hyperdrive shares and synchronizes a set of files, similar to rsync or Dropbox.
For each file it uses a technique called [Rabin fingerprinting](https://en.wikipedia.org/wiki/Rabin_fingerprint) to break the file up into pieces.
The Dat Team configured the Rabin chunker to produce chunks that are 16KB on average.
So if you share a site containing a single 1MB JPG you will get around 64 chunks.

After feeding the file contents through the chunker, Hyperdrive takes the chunks and calculates the SHA256 hash of each one.
It then arranges these hashes into a special data structure called the Flat In-Order Merkle Tree.

When two peers connect to each other and begin speaking the Hyperdrive protocol they can efficiently determine if they have chunks the other one wants, and begin exchanging those chunks directly.
Hyperdrive gives us the flexibility to have random access to any portion of a file while still verifying the other side isn't sending us bad data.
Beaker can also download different sections of files in parallel across all of the sources simultaneously, which increases overall download speed dramatically.

**Phase 4: Site archival**

Beaker keeps the downloaded sites indefinitely<sup>&dagger;</sup>, and will serve them from disk on reload.
That means you can open them offline.
In the background, it continues to sync new changes from the network, to make sure you have the most recent version of the site.

<sup>&dagger;</sup> In the future, a garbage collector will clean up the sites which haven't been explicitly saved by the user.
