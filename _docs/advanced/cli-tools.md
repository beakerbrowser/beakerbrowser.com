---
title:    CLI Tools
category: Advanced
order:    1
---

The Hyperdrive protocol is part of an ecosystem of tools created around [The Dat Project](http://dat-data.com).
Here are some useful commandline programs:

 - [dat](#dat)
 - [dat-publish](#dat-publish)
 - [dat-push](#dat-push)

---

<h3 id="dat">Dat <small><a href="https://github.com/datproject/dat">Repository</a></small></h3>

`npm install -g dat`

There are two commands in Dat:

1. **Share data:** `dat <directory>` will share a directory on your computer.
2. **Download data:** `dat <dat-link> <download-directory>` will download files from the Dat link to a directory on your computer. 

Running `dat` in the console, with no arguments, will show you the usage guide. You can always use this as a reference for all the commands:

```
dat <directory>

  share directory and create a dat-link

  --snapshot            create a snapshot of directory
  --port, -p            set a specific inbound tcp port

dat <dat-link> <directory>

  download a dat-link into directory

  --exit                exit process after download finishes
  --port, -p            set a specific inbound tcp port

general options

  --version, -v         get installed dat version
  --doctor              run dat doctor
  --quiet, -q           output only dat-link, no progress information
  --debug               show debugging output
```

#### Sharing Files

Share a directory by typing `dat <directory>`:

```
$ dat my_data/
Sharing /Users/joe/my_data/

Share Link: d6e1875598fae25165eff440ffd01513197ad0db9dbb9898f2a141288b9322c6
The Share Link is secret and only those you share it with will be able to get the files

[==============>] Added 2 files (1.44 kB/1.44 kB)

Connected to 1 peers. Uploading 288.2 B/s. Watching for updates...
```

You are now publishing that data from your computer. It will be publicly accessible as long as your terminal is open and the process is still running. The hash is a **secret hash**, your data is visible to anyone you send the hash to.

#### Downloading Files

Download files from a Dat link by typing: `dat <dat-link> <download-directory>`:

```
$ dat d6e1875598fae25165eff440ffd01513197ad0db9dbb9898f2a141288b9322c6 download_dir
Downloading in /Users/joe/download_dir

Share Link: d6e1875598fae25165eff440ffd01513197ad0db9dbb9898f2a141288b9322c6
The Share Link is secret and only those you share it with will be able to get the files

[==============>] Downloaded 3 files (1.44 kB/1.44 kB)

Connected to 1 peers. Downloading 1.44 kB/s. Watching for updates...
```

Dat will start downloading the data into the `download_dir` folder. Once the download is finished (a message will print and the bar will turn green), you can safely exit the process with `Ctrl-C` (`Cmd-C` on Mac). 

---

<h3 id="dat-publish">Dat-publish <small><a href="https://github.com/joehand/dat-publish">Repository</a></small></h3>

`npm install -g dat-publish`

Publish your dats to HTTP and run a public Dat peer!
Uses [hyperdrive-http](https://github.com/joehand/hyperdrive-http), [dat-archiver](https://github.com/maxogden/dat-archiver), and [peer-network](https://github.com/mafintosh/peer-network) to be a publicly accessible archive for your data stored in Dat.
Push new files to the server with [dat-push](https://github.com/joehand/dat-push).

#### Serving Dat files over HTTP

* Run `dat-publish` on your server. It will print a `<server-key>` for dat-archiver.
* Create a dat on your local computer (or use an existing directory without a Dat).
* `dat-push <server-key> [directory]`. Push a dat/directory to your server with `<server-key>`.
* Your files will be available on your server over http!

#### Public Dat Peer

You can also use dat-publish to act as a public dat peer.
Follow the same commands as above with the discovery option: `dat-publish <server-key> --discovery`.
After a `dat-push` is run, dat-publish will share your files on Dat.

#### Usage

```
dat-publish <server-key> [directory] --port=1234 --discovery
```

* `<server-key>` is the key for the [peer-network](https://github.com/mafintosh/peer-network) server. This is a private key for you to push files to with dat-push.
* `directory`: store the dat directories. Each dat will be stored in a folder with it's key as the name.
* `port`: Port for http server
* `discovery`: Public Dat peer. Join Dat swarm after a dat-push is finished.


---

<h3 id="dat-push">Dat-push <small><a href="https://github.com/joehand/dat-push">Repository</a></small></h3>

`npm install -g dat-push`

Push a Dat to a server running a [dat-archiver](https://github.com/maxogden/dat-archiver) via [peer-network](https://github.com/mafintosh/peer-network), such as [dat-publish](#dat-publish). Dat Push is for one-time pushes to an archive server and does not do live syncing.

#### Usage

```
dat-push <server-key> [directory]
```

* Run a `dat-archiver` server and copy the server key
* Run `dat-push <your-server-key> [directory]` (optionally specify directory, or push current directory)
* Files are sent to your dat-archiver server!
* `dat-push` will exit when your server received all the files.