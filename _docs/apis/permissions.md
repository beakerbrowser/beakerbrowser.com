---
title:    Permissions API
category: Web APIs
order:    3
---

<div class="card">
  <p><strong>Summary.</strong> Request access from the user to use special APIs.</p>
</div>

**Note**

- Only apps served over dat:// are able to access these APIs.
- <i class="fa fa-flask"></i> This API is under development and subject to change.

### Network access

By default, sites served over dat:// are not allowed to access the network.
They can, however, request exceptions.
This will generate a prompt, which the user can choose to accept or deny.

<img class="bordered" src="/img/screenshot-network-permission-request.png">

To request network access, use the `navigator.permissions` API.
If granted, the page will be able to target the granted domain for images, media, fonts, Ajax, and WebSockets.
It will not enable remotely-served styles, scripts, or objects.

```js
// Request access
var res = await navigator.permissions.request({ 
  name: 'network',
  hostname: 'github.com'
})
res.status // => 'granted'

// Query access
res = await navigator.permissions.query({ 
  name: 'network',
  hostname: 'github.com'
})
res.status // => 'granted'

// Give up access
res = await navigator.permissions.revoke({ 
  name: 'network',
  hostname: 'github.com'
})
res.status // => 'prompt'
```

The page must be refreshed for the policy-change to take effect.
Multiple hosts can be requested; subsequent requests add hosts, rather than replacing the current allowed hosts.
A wildcard string ('*') can be used to request or revoke access to all hosts.