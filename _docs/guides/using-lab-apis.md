---
title: Using Lab APIs
section: guides
sectionTitle: Guides
order: 1
---

Beaker is an experimental Web browser.
Some of its features are more stable than others.

The newest features are called "Lab APIs."
Lab APIs are features which are still in development and which will change in the future.

<aside class="tip">
  <div class="tip-heading">
    <span class="fa fa-exclamation-triangle"></span>
  </div>

  <p class="tip-content">
    Lab APIs will change, stabilize, or be removed in the future. You should not depend on a Lab API to always be available. 
  </p>
</aside>

## experimental.*

Lab APIs are found under `experimental.*`.

<figcaption class="code">examples</figcaption>
```js
experimental.datPeers.broadcast({hello: 'world'})
experimental.library.list({isSaved: true})
experimental.globalFetch('dat://beakerbrowser.com')
experimental.capturePage('dat://beakerbrowser.com')
```

## How to use Lab APIs

Specify the API you wish to use in the `"experimental.apis"` field in your [dat.json](/docs/apis/manifest.html):

<figcaption class="code">dat.json</figcaption>
```json
{
  "experimental": {
    "apis": ["datPeers", "globalFetch", "capturePage", "library"]
  }
}
```

By including the API in your dat.json, you recognize that you are using a Lab API which will change in the future.

## Available APIs

<table>
  <thead>
    <tr>
      <td>ID</td>
      <td>API</td>
      <td>description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>datPeers</code></td>
      <td><a href="/docs/apis/experimental-datpeers.html"><code>experimental.datPeers</code></a></td>
      <td>Send and receive messages with peers on a website.</td>
    </tr>
    <tr>
      <td><code>library</code></td>
      <td><a href="/docs/apis/experimental-library.html"><code>experimental.library</code></a></td>
      <td>Manage the user's collection of Dat archives.</td>
    </tr>
    <tr>
      <td><code>globalFetch</code></td>
      <td><a href="/docs/apis/experimental-globalfetch.html"><code>experimental.globalFetch</code></a></td>
      <td>Make Ajax calls outside of CORS restrictions.</td>
    </tr>
    <tr>
      <td><code>capturePage</code></td>
      <td><a href="/docs/apis/experimental-capturepage.html"><code>experimental.capturePage</code></a></td>
      <td>Take a screenshot of a page.</td>
    </tr>
  </tbody>
</table>

## How stable are Lab APIs?

Lab APIs are **NOT stable.**
Every Lab API will change in the future.

The following changes are guaranteed to happen at some point:

 - **Modifications**. Lab APIs will change as we learn more about how they work.
 - **Deprecations**. Lab APIs may be removed in favor of alternatives.
 - **Stabilizations**. Lab APIs may simply be accepted as stable Web APIs, at which point they will no longer exist on the `experimental.*` object.

<aside class="tip">
  <div class="tip-heading">
    <span class="fa fa-exclamation-triangle"></span>
  </div>

  <p class="tip-content">
    If you use a Lab API, your app will break one day because of a modification, deprecation, or stabilization.
  </p>
</aside>

The Beaker team will do its best to minimize the impact of changes and to keep you informed about changes when they occur.