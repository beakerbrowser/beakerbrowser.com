---
title:    Using DNS
category: Peer-to-Peer
order:    5
---

You can use DNS to give your Hyperdrive site a nice, human-readable name.
This has the added benefit of making a Hyperdrive site reconfigurable.
If (for instance) you lose your site's private key, you can create a new copy of the site with a new keypair, and update the DNS record.

To use DNS, add a TXT record to your domain name with the full URL of your Hyperdrive site.
For example:

```
dat://54f74fe89d7779946343ec6db9618631e4dbf43bece2a125d0099103741963c9/
```

Beaker will grab the URL and fetch that.

See <a href="dat://hostless.website">dat://hostless.website</a> for a working example.
Run `dig txt hostless.website` to see the records behind it.

---

### Security

This is an experimental feature, and it's not secure yet.
Until we've integrated DNSSEC or TLS certificates, or something similar, it may be possible to <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack">Man in the Middle attack</a> your DNS lookup.

If you're unsure about the risk, don't use this DNS feature.
