---
title: Thick applications model
section: howBeakerWorks
sectionTitle: How Beaker Works
order: 3
---

Beaker’s architectural philosophy holds that all networked applications should be:

<table class="basic-table">

  <tr>
    <th>Host-free</th><td>Applications should not be bound to a remote service.</td>
  </tr>

  <tr>
    <th>User-programmable</th><td>Applications should be easy to modify.</td>
  </tr>

  <tr>
    <th>Configurable</th><td>Applications should read configuration from the browser.</td>
  </tr>

  <tr>
    <th>Open-data</th><td>Applications should share data at the user's request.</td>
  </tr>

  <tr>
    <th>Automated builds</th><td>Applications should be easy to build.</td>
  </tr>

  <tr>
    <th>Private by default</th><td>Applications should use end-to-end encryption.</td>
  </tr>

</table>

The peer-to-peer features of Beaker results in three key properties.:

 1. Any device can act as a server.
 2. Multiple computers can serve the same site simultaneously.
 3. There is no back end.

These features enable users to publish independently of services, and move between applications freely. The rest of the architecture is built upon these ideas.

## Thick applications

Thick applications are standalone programs executed on the users device. They place the business logic in the client, improving programmability and privacy.

The name “Thick” comes from the traditional terminology for Web applications, which calls the client-side application a “Thin” application. The essential characteristic of Thick vs Thin is the location of the business logic. If a client-side application is Thin, its logic is vested in a remote service, and the application cannot do work without that service. If a client-side application is Thick, it handles its logic locally on the client device.

Rather than relying on the host, Thick applications use APIs provided by the browser. They are expected to prefer device resources and IPC over network services. For publishing and consuming user-data on the network, Thick applications use peer-to-peer and traditional Web services.

## Open-source

Beaker apps are both serverless and decentralized. Its apps are intended to be open source. By placing the business logic into the client, Beaker makes it possible to access and modify core behaviors.

Thick applications can be forked by generating a new archive and copying the files of the source. The fork can then live as a new independent app, or be re-merged into the original via a pull-request style of flow.

## Open-data

Beaker relies on the Dat network to create an open data network. Dat’s authority model is fully-distributed. Each archive is controlled by the author through ownership of its key pair. By using Dat as the primary means to publish and consume content, Beaker ensures that there are no “walled gardens.” Because users are in control of their data, it’s much harder to lock a user into a service, or enforce a unilateral change to access.