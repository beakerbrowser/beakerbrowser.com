---
title: Share files secretly
section: tutorials
sectionTitle: Tutorials
order: 4
---

One of Beaker’s most powerful features comes from the Dat protocol’s approach to transport secrecy. As explained in [Inside Beaker: Privacy and security], a Dat URL is “secret.” It is unguessable, and encrypted over the wire. This means:

**Only users that possess a Dat URL can access its files.**

To share files secretly, [create a new Dat] and use a secure channel to send the URL to your intended recipients. Ideally that channel would be fully encrypted, but unless you’re under active attack, email or most chat programs will work fine. (For the moment, it’s unlikely that your email provider will slurp out dat URLs and download their content. At least, they won’t until Dat gets a little more popular!)

After transferring the files, remove the Dat from your library. Removing a Dat doesn’t delete your local copy of the files; it just removes the archive from your Beaker, so that nobody else can download the site.