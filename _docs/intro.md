---
title:    Introduction to Beaker
short_title: Introduction
order:    1
---

Beaker Browser introduces a Peer-to-Peer Hypermedia Protocol for publishing content from any device.
This protocol is called Dat.
It is Versioned, P2P, and Secure.

Dat enables users to generate Web sites at no cost.
Users can host content from home, or push the files to public peers.

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

```javascript
// Create a site with the Web API
var archiveURL = await dat.createArchive({ title: 'My Site' })
dat.writeFile(archiveURL + 'index.html', '<h1>Hello!</h1>')
```

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
[Read more.](/docs/dat/intro.html#security-properties)

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

### Learn More

<a class="btn btn-block" href="/docs/dat/intro.html"><i class="fa fa-info-circle" aria-hidden="true"></i> The Dat Protocol</a>
<a class="btn btn-block" href="/docs/dat/websites.html"><i class="fa fa-file-code-o" aria-hidden="true"></i> Dat Websites</a>
<a class="btn btn-block" href="/docs/dat/confidential-sharing.html"><i class="fa fa-shield" aria-hidden="true"></i> Confidential Sharing</a>
<a class="btn btn-block" href="/docs/dat/dns.html"><i class="fa fa-globe" aria-hidden="true"></i> Domain Names</a>
<a class="btn btn-block" href="/docs/apis/manifest.html"><i class="fa fa-map-o" aria-hidden="true"></i> App Manifest</a>
<a class="btn btn-block" href="/docs/apis/dat.html"><i class="fa fa-share-alt" aria-hidden="true"></i> Dat API</a>
<a class="btn btn-block" href="/docs/faq.html"><i class="fa fa-question-circle" aria-hidden="true"></i> Frequently Asked Questions</a>