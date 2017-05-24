---
title: Troubleshooting
section: usingBeaker
sectionTitle: Using Beaker
order: 2
---

<figure>
<img src="/img/docs/trouble-timedout.png">
<figcaption>Timeouts are a common error for Dat sites</figcaption>
</figure>

Timeouts can occur because nobody is serving the site currently. However, there are some system configurations that can stop peer-to-peer traffic from reaching your system.

## MacOS firewall

The MacOS firewall defaults to blocking all incoming traffic. We need to create an exception for Beaker.

<figure>
<img src="/img/docs/trouble-macos-prefs.png">
<figcaption>Select "Security &amp; Privacy" in MacOS System Preferences</figcaption>
</figure>

Disabling the firewall is one option, but it's better to leave it on. Turn on the firewall, then click "Firewall Options."

<figure>
<img src="/img/docs/trouble-macos-firewall1.png">
<figcaption>Select "Firewall Options" in MacOS Security &amp; Privacy</figcaption>
</figure>

Uncheck "Block all incoming connections," then click OK. You don't need to manually add Beaker to the list below, though you can.

<figure>
<img src="/img/docs/trouble-macos-firewall2.png">
<figcaption>Uncheck "Block all incoming connections" then click OK</figcaption>
</figure>

Now, restart Beaker. If you are prompted to allow access to the network, click "Allow." Your firewall is now configured.

Repeat this process on any MacOS computer you want to share with.