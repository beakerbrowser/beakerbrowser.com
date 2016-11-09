---
title:    The Dat Protocol
short_title: Introduction
order:    1
category: Dat
---

The Dat protocol was created with grants from the Knight and Sloan Foundations.
It is developed by a non-profit team with a mission to advance scientific, journalistic, and civic publishing.
Read more at [the Dat organization's website](http://datproject.org/).

Dat is most easily described as "Git meets BitTorrent."
It connects users in a P2P system, and distributes archives between them.
It is:

 - Versioned
 - Hostless
 - and Secure

<hr class="nomargin">

### The Protocol

A Dat "archive" behaves like a self-contained folder of files.
The archive is addressed by a public key.
All updates are signed, and the files are referenced by content-hash.

#### URLs

Sites served with the `dat://` scheme use the Dat protocol.
The URL behaves similarly to HTTPS URLs, but a 64-character hex-encoded pubkey is used in place of an IP adddress.

#### Discovery

As in BitTorrent, multiple peers can be used simultaneously to download data.
Users connect to "discovery networks" to look up peers with the files they need.
The most common discovery networks are the BitTorrent Mainline DHT, modified DNS servers, and Multicast UDP.

Multicast UDP enables peers to sync directly over the LAN, so that Internet connectivity is not a requirement for application distribution.

#### Caching & Resharing

When a Dat site is visited, Beaker downloads the metadata log, and then refers to the log to download any requested files.
The files are cached offline for a period, and then garbage-collected.
Users can choose rehost the files from their machine, but (unlike BitTorrent) this is not the default behavior.

#### Changelog

A full history of changes is retained in each Dat archive's metadata log.
The log is append-only, and can not be modified after it has been distributed.
Unlike Git, this log can not be branched.

#### Checkpoints

By default, only the latest version of a file is retained.
However, by writing a "checkpoint" to the log, authors instruct Beaker to retain the file-states at that point in history.
Checkpoints can be then used by peers to lookup previous versions of a file over the network.

#### Versioned URLs

Checkpoints will manifest as a 'version' tag in URLs, which look like this: `dat://{archive}@{version}/{path...}`. For instance, the following is a valid Dat URL: [dat://foo.com@2.1.0/index.html](dat://foo.com@2.1.0/index.html).

#### Consistency

Dat does not use a global blockchain or Proof-of-Work consensus.
It is an eventually-consistent network, where each archive is controlled by its private-key holder.

<hr class="nomargin">

### Security Properties

The Dat protocol carries unique properties which make it suitable for delivering sensitive data and software.

#### Auditability

The archive's append-only log uses a Merkle Tree internally to verify contents.
Because the hashes include the log history, it is trivial to check for differences in two copies of a log.
Receiving peers will reject updates to an archive if they detect a branch in history.
This makes it difficult to deliver a targeted payload, as peers can gossip with each other about the current state of an archive.

#### Content Sandboxing

Sites opened on the Dat protocol do not have network hosts, and are disallowed from accessing the network directly.
By default, they are only allowed to issue fetches to `dat://` sites.
Access to the network via Ajax or HTML embeds must be explicitly requested to the user, and will never include scripts, styles, or objects.

#### Network Confidentiality

Network traffic is encrypted using the public key of the archive, in this case as a symmetric key.
The key is HMACed before it is broadcasted to the discovery networks.
Therefore, peers must have prior knowledge of a Dat URL in order to decrypt its network traffic.
The Dat URL behaves as a read-capability.
[Read more about Confidential Sharing](/docs/dat/confidential-sharing.html).

#### Weaknesses in the Confidentiality

Peers who possess a Dat URL will be able to look up all other peers who are swarming the archive on their discovery-network.
This means that Dat is not anonymous: any other user that possesses a Dat URL will know if you downloaded the archive.

<hr class="nomargin">

### In Application

#### Independent Publishing

Dat sites are able to access the [Dat Web API](/docs/apis/dat.html) to read and publish new archives.
As each archive behaves as an independent website, this makes it cheap and easy to publish content independently of a parent application.
Rather than posting to a site, users can self-publish their content.

#### Offline-first

Dat applications are thick-client: they run on the device, not on a host.
Web-services are an optional dependency instead of a requirement.
Developers are encouraged to use device APIs to store data, and P2P APIs to share, whenever possible.

#### Public Peering

The Dat network does not try to automatically guarantee availability.
Publishers are in charge of hosting their archives on the network, though downloaders are empowered to rehost as well.
Subscription-based Public Peer services should be used to help with distribution.

<hr class="nomargin">

### Experimental Behaviors

#### DNS

Dat implements shortnames by writing TXT entries that contain the unshorted Dat URL.
This is experimental, as there is currently no authentication, and so a MITM is trivial to execute.
[Read more about how to use Dat DNS](/docs/dat/dns.html).

#### Compaction

Compaction will be implemented with an automatic milestone that's written every N messages.
When the milestone is reached, the full current state of the Dat will be rewritten to the log.
This will enable peers to seek to a modulo-N position to read the current state, thereby avoiding unbounded growth.