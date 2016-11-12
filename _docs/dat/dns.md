---
title:    Domain Names
order:    4
category: Dat
---

<div class="card">
  <p>Dat enables you to host sites instantly and for free. <a href="/docs/dat/intro.html">Read more</a>.</p>
</div>

You can use DNS to give your Dat site a nice, human-readable name.
This has the added benefit of making a Dat site reconfigurable.
If (for instance) you lose your site's private key, you can create a new copy of the site with a new keypair, and update the DNS record.

To use DNS, add a TXT record to your domain name with the full URL of your Dat site.
For example:

```
dat://54f74fe89d7779946343ec6db9618631e4dbf43bece2a125d0099103741963c9/
```

Beaker will grab the URL and fetch that.

See <a href="dat://hostless.website">dat://hostless.website</a> for a working example.
Run `dig txt hostless.website` to see the records behind it.

<hr class="nomargin">

### Security

This is an experimental feature and it's not secure yet.
Until we've integrated DNSSEC or TLS certificates, or something similar, it may be possible to <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack">Man in the Middle attack</a> your DNS lookup.

If you're unsure about the risk, don't use this DNS feature.

**Note**: If you put your URL in a DNS record, it will no longer be confidential.
Don't give a domain name to any site you want to keep secret.