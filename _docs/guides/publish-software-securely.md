---
title: Publish software securely
section: guides
sectionTitle: Guides
order: 5
---

One of Beaker’s most powerful features comes from the Dat protocol’s approach to ensuring archive/site integrity. As explained in [Inside Beaker: Privacy and security](/docs/how-beaker-works/privacy-and-security.html#archive-integrity), each update to a Dat is signed, and and each file is hashed.

> The Dat protocol ensures that the archive is signed by the author, and can be checked for correctness by querying network peers (distribution uniformity). Only one version of the archive’s history can be distributed. If a signed Dat archive is found to differ from a peer’s signed copy, it is treated as corrupt, as the differing content could indicate a targeted attack by the Dat author. It’s important that all users receive the same content, and that’s why Dat has integrity verification built in.

In Beaker, we use this to ensure that applications are securely distributed. However, this can also be valuable for distributing source-code and software binaries which need a high degree of security.

To do this, we suggest [Hosting the binaries outside of Beaker](/docs/tutorials/host-outside-of-beaker.html), perhaps using the [Dat CLI](https://github.com/datproject/dat) or [DatHTTPD](https://github.com/beakerbrowser/dathttpd). Using the latter, your users will be able to download either from Dat directly, or over HTTPS if they don’t need the added security.

<figure>
<img data-src="/img/docs/tour-site-history.jpg" >
<figcaption>The Dat protocol keeps a full history and signs every update</figcaption>
</figure>
