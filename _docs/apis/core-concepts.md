---
title: Core concepts
section: webAPIs
sectionTitle: Web APIs
order: 1
---

#### Peer-to-peer hosting

Dat is a peer-to-peer protocol that's similar to BitTorrent. The browser enters the swarm while a user is visiting a site. File metadata is downloaded optimistically, while the file content is only downloaded on access. Changes to the metadata are actively synced in the background.

#### Public-key URLs

Each Dat site is addressed by an elliptic-curve public-key URL. The public key is encoded in 64-character hex. The device that holds the private key is the “owner” or “author” of the Dat. Currently, only one device may be the owner; multi-author Dats are not yet supported.

#### Hostless sandbox

Traditionally, Web sites can use Ajax to freely can freely contact  their hosting server.. However, Dat sites are served from the peer-to-peer swarm, not from a hosting server. Therefore there is no remote host attached to the domain, and all remote requests to non-Dat URLs require a request for permission.

#### Dat staging area and commits

Like Git, Beaker maintains a “staging area” for each Dat the user creates or saves. This staging area allows the user to make local changes to the Dat before publishing. In addition to helping prevent changes from accidentally being published, this saves bandwidth, processing time, and disk space. At any point, the user can either “commit” the changes to the Dat, or “revert” to the last committed stage. These concepts apply to the Web APIs as well.

#### Versions and history

Each Dat maintains a linear, monotonic log of its changes (the history). Each time a file is written or deleted, a new entry is added to the history, and the version number is incremented. This version number (the revision) can be used to checkout historic versions of a Dat. In Beaker, this is done by adding the version number to the end of the domain after a ‘+’ sign.

#### Dat files API

Beaker provides a complete Web API for reading, writing, and watching Dats from within a site. Only sites hosted over the dat:// protocol can access the API. No permission is currently required to read Dats, but permission is required to write. (Reads may be permissioned in the future, depending on their potential for abuse.)