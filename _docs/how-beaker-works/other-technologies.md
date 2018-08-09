---
title: Other technologies
section: howBeakerWorks
sectionTitle: How Beaker Works
order: 4
---

Beaker was started in the Spring of 2016, following an explosion of peer-to-peer and decentralized protocol development. A short list of those protocols includes [Bitcoin](https://bitcoin.org/), [Ethereum](https://www.ethereum.org/), [Namecoin](https://www.namecoin.org/), [Blockstack](https://blockstack.org/), [Zeronet](https://zeronet.io/), [IPFS](https://ipfs.io/), [Secure Scuttlebutt](https://www.scuttlebutt.nz/), [WebTorrent](https://webtorrent.io/), and [Dat](https://datproject.org/).

These protocols can be broadly categorized as either Blockchain Variants and BitTorrent Variants.

## Why not a blockchain?

We quickly ruled out the blockchain variants (Bitcoin, Ethereum, Namecoin) as the core network model of Beaker for the following reasons:

- Proof-of-work and global ledger distribution are inefficient. So far, blockchain networks have struggled with throughput as they scale. Betting on a blockchain includes the risk that throughput may decrease over time, and/or that users will be forced to download large datasets to participate.
- The requirement to use global consensus on all transactions results in a direct costs for operations in the form of transaction fees. We know that many network operations do not require global consensus, and therefore a blockchain makes a poor default for applications.
- We believe Proof-of-work is wasteful, and we have ethical reservations about the expenditure of resources to sustain PoW. At this time, Proof-of-stake is still an unproven alternative, but we are interested in its potential.
- We have concerns over governance models. By investing decision-making in miners, the blockchain networks have given power to the entities with the most mining resources. We’re concerned this may give too much power to wealthier actors. We also worry about the unpredictability of policies designed to patch the “hands-off” core design.

We are not completely disinterested in blockchains, but we take a pragmatic view that the value of a network technology is in “the API it provides.” For example, if Bitcoin is capable of providing a low-cost and open payments API for users, then we’re interested in using it. However, we see the blockchain solutions as involving more risk and downsides than is necessary to accomplish our goals for Beaker at this time.

## About the Bittorrent Variants

It would be fair to characterize Beaker as “a novel application of Bittorrent’s concepts to the Web platform.” If Beaker had been started in 2006, it would be using Bittorrent as its primary protocol. However, as of 2016, new variants have appeared with better properties.

At the core of Bittorrent is the use of cryptographic hashes to distribute verifiable datasets. By reducing the datasets down to small hash identifiers, the throughput requirement of trusted channels is reduced down to what’s required to provide the hash identifiers. Actual content transmission can then be delegated to one or many untrusted channels, and therefore the resource-requirements of hosting can be displaced to CDNs and/or to the peer network.

Also key to Bittorrent’s value is the discovery networks which enable user-devices to act as content-hosts, despite using dynamic IPs and residential routers. These discovery networks can include LAN multicast, enabling transfers without Internet connectivity.

Moving past the original Bittorrent design, Elliptic curve cryptography can now generate public keys which are small enough to act as URLs. EC key pairs can sign hash identifiers, providing a “pointer” to content which mutates over time, while the main identifier -- a public key -- remains fixed.

## Why Dat instead of IPFS

The Bittorrent variants share many features, and at Beaker's formation, IPFS was the presumptive choice. However, differences in design goals made Dat our ultimate choice.

 - IPFS exchanges static hash-addressed blobs. While it does provide “mutable” public-key-addressed blobs, it is not as well-developed as Dat’s auditable archive histories. We favored the better mutability featureset of Dat for Beaker.
 - IPFS made a decision to break from the standard URL format, which was incompatible with Beaker’s goals. We want to use a URL scheme which mirrors the existing HTTP/S format as closely as possible.

## Further development

Beaker’s suite of protocols will evolve as the problem-space is better understood, and as each technology matures. Our goal is to provide a stack capable of replacing all modern closed services.