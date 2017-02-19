---
title: Architectural Overview
---

Beaker introduces the "Thick&nbsp;applications&nbsp;model." It is comprised of 

  1. A secure, hostless transport protocol (Dat),
  2. An offline-first applications model,
  3. A set of rich Web APIs for publishing, storage, IPC, and configuration.

### Background

The traditional model for Web applications is the "Thin" app. Thin apps are frontends to remote services. They place the business logic of the app in the central server.

Thick applications, by opposition, are self-contained apps that run on the user device. They are similar to desktop applications. Thick apps place business logic in the frontend, and can leverage remote services as needed.

Beaker runs both Thick and Thin apps.

### Dat files protocol

At the heart of Beaker is the [Dat Protocol](./dat.html), a peer-to-peer file transport which strongly guarantees uniform distribution of signed archives. Beaker uses Dat to distribute sites, applications, and user&nbsp;data. It is exposed to applications as a URL scheme and a Web API.

Dat decentralizes authority in Beaker's network of users and servers. Users retain the signing keys for each archive, and distribute updates asynchronously. This has the advantage of working offline, and of retaining data authority in the authoring users' hands, rather than vesting it in a service's database.

### Thick applications model

Thick applications are standalone client-side programs executed on the users device. They place the rendering and business logic in the client, improving programmability and privacy.

Thick applications use APIs provided by the browser. They are expected to prefer device resources and IPC over network services. For publishing and consuming user-data, Thick applications use Dat file-archives or data-feeds. For large-scale/global aggregated views of Dat archives, apps contact "crawler" services which index the Dat network into computed views.

To discover network services and user data, Applications should query a registry of services maintained by the browser, thereby enabling the user to configure their applications.

### Permissions and security

Thick applications are executed in a restrictive sandbox on the user's device. While traditional Web apps assume connection to a remote host, Thick applications are detached and must request network rights specially. When services are required, Thick applications are expected to ask Beaker for configured endpoints. This improves configurability and security of the software.

All thick applications are delivered via the dat:// protocol. This ensures that the application package is signed by the author, and can be checked for correctness by querying network peers (distribution uniformity). If a signed dat archive is found to differ from a peer's signed copy, it is treated as corrupt, as this could indicate a targeted attack.

Beaker uses content-security policies to ensure that only the archive source assets are executed in the application sandbox. The Dat protocol is able to deliver automatic updates, providing continuous delivery. For additional security, installed applications will be pinnable at the install version and only upgraded by manual review.

### Further reading

 - [Philosophy](./philosophy.html). Why Beaker exists.
 - [Dat protocol](./dat.html). About the Decentralized Archive Transport.