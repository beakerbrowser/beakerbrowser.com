---
title: Dat Protocol
redirect_from:
 - /docs/dat/intro.html
---

### "Decentralized Archive Transport"

The Dat Protocol browses versioned, static sites.
It is similar to BitTorrent, but adds a secure changelog inspired by [Certificate Transparency](https://www.certificate-transparency.org/) to safely distribute updates.

Sites are addressed by public keys and behave like static sites with no backend.
If the network drops, a downloaded site will stay available from the hard-drive.
Hosting can even happen over the WiFi.

```javascript
// Create a site with the Web API
var archiveURL = await dat.createArchive({ title: 'My Site' })
dat.writeFile(archiveURL + 'index.html', '<h1>Hello!</h1>')
```

Dat sites are secret, and their network traffic is encrypted.
Only users that possess a site's URL can access the files or metadata.
This makes it very easy for users to share personal files with each other.

For extra security, Dat sites are sandboxed away from the network.
Their code can't access remote hosts, unless they request special permission.

<img class="bordered centered" src="/img/screenshot-request-network.png">

Internally, Dats use the same concepts behind [Certificate Transparency](https://www.certificate-transparency.org/) to create an cryptographically-auditable change-log.
Archives are distributed between users in a peer-to-peer "swarm."
Checkpoints (**coming soon**) will enable human-readable, versioned Dat URLs, such as: `dat://beakerbrowser.com@2.1.0/index.html`

This will be especially useful for publishing javascript modules:

```javascript
import jquery from 'dat://code.jquery.com@3.1.1/jquery.min.js'
```

### Further reading

 - [datprotocol.com](https://www.datprotocol.com). Learn about the protocol in-depth.
 - [datproject.org](https://datproject.org). The organization behind Dat.
 - [FAQ](./faq.html)