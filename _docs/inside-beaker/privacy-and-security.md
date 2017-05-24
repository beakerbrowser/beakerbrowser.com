---
title: Privacy and security
section: insideBeaker
sectionTitle: Inside Beaker
order: 2
---

Beaker is designed to give better privacy where it counts. This involves a tradeoff which might be surprising. To explain, here is a quick comparison to traditional websites:

- **Data privacy: improved.** Dat sites store user data on the device, and Dats can be secretly shared. User files and messages can be made fully secret.
- **Browsing privacy: mixed.** The peer-to-peer network reveals who is sharing a Dat to anybody that possesses the Dat’s URL. This means that browsing history for publicly-shared Dats may be tracked.

## Privacy where it counts

Beaker can’t yet protect browsing habits, but it provides much better protection of the user’s data, including messages, documents, and contacts. Compared to current Web services, which store all user data in the clear for the operators to read, Beaker stores user content on the device, and provides encrypted peer-to-peer transmission of the files.

## Strict sandbox

Dat websites are executed in a restrictive sandbox on the user’s device. While traditional Web apps assume connection to a remote host, Dats are detached and must request network rights specially. Without permission, Dat sites have no way to export user data.

Rather than using remote services, Dat sites write user data to the local device with the `localStorage`, `indexDB`, and Dat APIs.

## Transport security

Dat URLs are secrets which ensure that only users in possession of the URL can discover the Dat or read its network traffic. This is accomplished by two mechanisms:

1. Discovery hashing. When the Dat protocol enters the swarm, it contacts multiple overlapping “discovery networks” to find peers. To disguise which site the user is requesting, Dat applies a one-way HMAC to the URL.
2. Transport encryption. Once in contact with peers, Dat uses the 32-byte public key as a symmetric key to encrypt the network traffic.

The creates a unique trade-off: secret Dats can be exchanged in complete privacy, but Dats which have publicly shared URLs are openly tracked. This means that anybody can see which publicly-shared Dats you have downloaded.

## Archive integrity

The Dat protocol ensures that the archive is signed by the author, and can be checked for correctness by querying network peers (distribution uniformity). Only one version of the archive’s history can be distributed. If a signed Dat archive is found to differ from a peer’s signed copy, it is treated as corrupt, as the differing content could indicate a targeted attack by the Dat author. It’s important that all users receive the same content, and that’s why Dat has integrity verification built in

Beaker uses content-security policies to ensure that only the archive source assets are executed in the application sandbox.