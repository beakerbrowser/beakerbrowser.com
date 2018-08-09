---
title: Privacy and security
section: howBeakerWorks
sectionUrl: /docs/how-beaker-works
sectionTitle: How Beaker Works
order: 2
---

Beaker can’t yet protect browsing habits, but it provides much better protection of the user’s data, including messages, documents, and contacts. Compared to current Web services, which store all user data in the clear for the operators to read, Beaker stores user content on the device, and provides encrypted peer-to-peer transmission of the files.

<table class="basic-table">
  <tr>
    <th>Browsing privacy</th><td>No.</td>
  </tr>
  <tr>
    <th>Data privacy</th><td>Yes.</td>
  </tr>
  <tr>
    <th>Secret sharing</th><td>Yes.</td>
  </tr>
</table>

## Browsing privacy

Beaker does not provide browsing privacy on the network. Anybody who possesses the URL for a site can see the devices requesting and sharing the site.

## Data privacy

Beaker provides better data privacy than other browsers. Dat websites are executed in a restrictive sandbox on the user’s device. While traditional Web apps assume a connection to a remote host, Dats are detached and must request network rights specially. Without permission, Dat sites should have no way to export user data.

Rather than using remote services, Dat sites write user data to the local device with the `localStorage`, `indexedDB`, and Dat APIs. Read more about the [Thick applications model](/docs/how-beaker-works/thick-applications.html).

## Secret sharing

Beaker provides a unique means for sharing files privately between peers, without revealing the content to a third party. Dat URLs are secrets which ensure that only users in possession of the URL can discover the Dat or read its network traffic. This is accomplished by two mechanisms:

1. Discovery hashing. When the Dat protocol enters the swarm, it contacts multiple overlapping “discovery networks” to find peers. To disguise which site the user is requesting, Dat applies a one-way HMAC to the URL.
2. Transport encryption. Once in contact with peers, Dat uses the 32-byte public key as a symmetric key to encrypt the network traffic.

The creates a unique trade-off: secret Dats can be exchanged in complete privacy, but Dats which have publicly shared URLs are openly tracked. This means that anybody can see which publicly-shared Dats you have downloaded.

Read the [Dat whitepaper](https://github.com/datproject/docs/tree/master/papers) for detailed information about the protocol's secrecy guarantees.

## Site integrity

The Dat protocol ensures that the archive is signed by the author, and can be checked for correctness by querying network peers (distribution uniformity). Only one version of the archive’s history can be distributed. If a signed Dat archive is found to differ from a peer’s signed copy, it is treated as corrupt, as the differing content could indicate a targeted attack by the Dat author. It’s important that all users receive the same content, and that’s why Dat has integrity verification built in.

Beaker uses content-security policies to ensure that only the archive source assets are executed in the application sandbox.
