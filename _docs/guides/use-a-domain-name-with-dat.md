---
title: Use a domain name with dat://
section: guides
sectionUrl: /docs/guides
sectionTitle: Guides
author: Tara Vancil
authorAvatar: /img/team/taravancil.jpg
authorLink: https://taravancil.com
description: Learn how to use a domain name with a dat:// website
---

By default, `dat://` websites are addressed with a 64 character URL. For example, here's the raw `dat://` URL for [dat://beakerbrowser.com](dat://beakerbrowser.com):

```
dat://87ed2e3b160f261a032af03921a3bd09227d0a4cde73466c17114816cae43336
```

A raw `dat://` URL is similar in some ways to an [IP address](https://en.wikipedia.org/wiki/IP_address):

 - Used as an identifier that points to a website
 - Difficult to remember
 - Most of the time it's preferable to reference it with a [domain name](https://en.wikipedia.org/wiki/Domain_name)

[Learn more about `dat://` URLs](https://docs.datproject.org/concepts#dat-links)

## Domain names and `dat://`

There are a couple of ways to use your domain name with a `dat://` website.

If you want to use your domain name with `dat://`, but don't care about republishing your website on `https://`, [jump to Dat DNS TXT records](#dat-dns-txt-records).

If you want to use your domain name with `dat://`, and also want to mirror the same content on `https://`, [jump to `.well-known/dat`](/docs/guides/use-a-domain-name-with-dat#well-knowndat).

## Dat DNS TXT records

To point your domain name to a `dat://` website, you can use a [DNS TXT record](https://www.datprotocol.com/deps/0005-dns/#dns-txt-record).

First, open your domain name registrar's DNS settings page. Then add a `TXT` record with the value `datkey=<yourdatkey>`, where `<yourdatkey>` is the 64 characters after `dat://` in your website's URL.

In this example, the first `TXT`record will apply to the top-level domain, and the second will apply to the `www` subdomain:

```
NAME | TYPE | DATA
-----|------|------
@    | TXT  | datkey=327bf0...
www  | TXT  | datkey=123456...
```

[Dat DNS TXT record specification](https://www.datprotocol.com/deps/0005-dns/#dns-txt-record)

## `.well-known/dat`

If you want to publish your website under your domain name with both `dat://` and `https://`, consider using the [`.well-known/dat` technique](https://www.datprotocol.com/deps/0005-dns/#-well-known-dat).

This approach requires publishing a file at `https://<yourdomain>/.well-known/dat` with the following structure:

<figcaption class="code">.well-known/dat</figcaption>
```
dat://<yourdatkey>
TTL=3600
```

With this technique, Beaker uses the `.well-known/dat` file to identify which `dat://` URL it should display when someone visits your website.

If you use this technique, we recommend using a tool like [`homebase`](https://github.com/beakerbrowser/homebase) to manage your website. `homebase` will seed your `dat://` website and make sure it stays online, mirror your website to `https://`, and automatically publish the `.well-known/dat` file.

[`.well-known/dat` specification](https://www.datprotocol.com/deps/0005-dns/#-well-known-dat)

## Further reading

- [Manage your website with `homebase`](https://github.com/beakerbrowser/homebase)
- [Dat DNS TXT record specification](https://www.datprotocol.com/deps/0005-dns/#dns-txt-record)
- [`.well-known/dat` specification](https://www.datprotocol.com/deps/0005-dns/#-well-known-dat)
