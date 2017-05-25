---
title: Troubleshooting
section: usingBeaker
sectionTitle: Using Beaker
order: 2
---

<figure>
<img data-src="/img/docs/trouble-timedout.jpg">
<figcaption>Timeouts are a common error for Dat sites</figcaption>
</figure>

Timeouts can occur because nobody is actively hosting the site’s files. Additionally, there are some system settings that can stop peer-to-peer traffic from reaching your system.

## MacOS firewall

The MacOS firewall defaults to blocking all incoming traffic. You’ll need to create an exception for Beaker.

<figure>
<img data-src="/img/docs/trouble-macos-prefs.jpg">
<figcaption>Select "Security &amp; Privacy" in MacOS System Preferences</figcaption>
</figure>

You *could* disable the firewall entirely, but it’s better to leave it on. Turn on the firewall, then click “Firewall Options.”

<figure>
<img data-src="/img/docs/trouble-macos-firewall1.jpg">
<figcaption>Select "Firewall Options" in MacOS Security &amp; Privacy</figcaption>
</figure>

Uncheck "Block all incoming connections," then click “OK”.

<figure>
<img data-src="/img/docs/trouble-macos-firewall2.png">
<figcaption>Uncheck "Block all incoming connections" then click “OK”</figcaption>
</figure>

Now, restart Beaker. If you are prompted to allow access to the network, click “Allow.” Your firewall is now configured.

Repeat this process on any MacOS computer you want to share a Dat archive with.