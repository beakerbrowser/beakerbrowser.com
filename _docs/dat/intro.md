---
title:    The Dat Protocol
short_title: Introduction
order:    1
category: Dat
---

Dat is a Peer-to-Peer Hypermedia Protocol for publishing content from any device.
It is **versioned, P2P, and secure**.

Dat enables users to generate Web sites at no cost.
Users can host content from home, or push the files to public peers.
Publishing is as simple as:

```javascript
// Create a site with the Web API
var archiveURL = await dat.createArchive({ title: 'My Site' })
dat.writeFile(archiveURL + 'index.html', '<h1>Hello!</h1>')
```

Beaker leverages Dat's unique properties to allow you to view the files behind a site, host your own content from the browser, or even fork a site.

<img src="/img/screenshot-dat-viewer.png">
<br>
<br>

<div class="apis">
  <div class="api">
    <div class="orb"><i class="fa fa-share-alt" aria-hidden="true"></i></div>
    <h5>P2P</h5>
  </div>
</div>

Dat distributes content between users in a BitTorrent-like swarm.
Users don't automatically share sites they download, but can opt-in to becoming a rehoster at any time.

Sites are addressed by public keys and behave like static sites with no backend.
If the network drops, a downloaded site will stay available from the hard-drive.
Hosting can even happen over the WiFi.
Cloud optional!
<br>
<br>

<div class="apis">
  <div class="api">
    <div class="orb"><i class="fa fa-lock" aria-hidden="true"></i></div>
    <h5>Secure</h5>
  </div>
</div>

Dat sites are secret, and their network traffic is encrypted.
Only users that possess a site's URL can access the files or metadata.
This makes it very easy for users to share personal files with each other.
[Read more.](#security-properties)

For extra security, Dat sites are sandboxed away from the network.
Their code can't access remote hosts, unless they request special permission.

<br>
<img class="bordered centered" src="/img/screenshot-request-network.png">
<br>
<br>

<div class="apis">
  <div class="api">
    <div class="orb"><i class="fa fa-at" aria-hidden="true"></i></div>
    <h5>Versioned</h5>
  </div>
</div>

Internally, Dats use the same concepts behind [Certificate Transparency](https://www.certificate-transparency.org/) to create an cryptographically-auditable change-log.
Checkpoints let authors specify points in the log where the version has changed.
Along with DNS, this will enable human-readable, versioned Dat URLs, such as: `dat://beakerbrowser.com@2.1.0/index.html`

This is especially useful for publishing javascript modules:

```javascript
import jquery from 'dat://code.jquery.com@3.1.1/jquery.min.js'
```

<br>
<hr class="nomargin">

### The Protocol

#### Archives

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

#### Compaction

Decentralized protocols often have a problem with "unbounded growth."
Without a way to decide what information can be deleted, the dataset grows in size indefinitely.

In Dat, [Compaction](https://en.wikipedia.org/wiki/Data_compaction) will be implemented with an automatic milestone that's written every N messages.
When the milestone is reached, the full current state of the Dat will be rewritten to the log.
This will enable peers to seek to a modulo-N position to read the current state, thereby avoiding unbounded growth.

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

#### Offline-First

Dat applications are thick-client: they run on the device, not on a host.
Web-services are an optional dependency instead of a requirement.
Developers are encouraged to use device APIs to store data and P2P APIs to share data whenever possible.

#### Public Peers

The Dat network does not automatically guarantee availability.
Publishers are in charge of hosting their archives on the network, though downloaders are empowered to rehost content as well.
Subscription-based Public Peer services can be used to help distribute archives and provide guaranteed availability.

<hr class="nomargin">

### Experimental Behaviors

#### DNS

Dat implements shortnames by writing TXT entries that contain the unshorted Dat URL.
This is experimental, as there is currently no authentication, and so a MITM is trivial to execute.
[Read more about how to use Dat DNS](/docs/dat/dns.html).

<div class="card" style="margin: 4em 0; font-size: 105%">
  <p>
    Dat was created with grants from the Knight and Sloan Foundations.
    Read more at <a href="http://datproject.org/">the Dat organization's website</a>.
  </p>
</div>