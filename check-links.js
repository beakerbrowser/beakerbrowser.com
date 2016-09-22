var linkCheck = require('link-check');
var jetpack = require('fs-jetpack');
var jsdom = require('jsdom');

function htmlLinkCheck (file) {
  jsdom.env(file.text, (err, window) => {
    if (err)
      throw err

    Array.from(window.document.getElementsByTagName('a')).forEach(el => {
      var link = el.getAttribute('href')
      linkCheck(link, { baseUrl: 'http://localhost:4000/' }, (err, res) => {
        if (err || res.statusCode !== 200) {
          console.log(res.statusCode + ' ' + file.path + ' ' +link)
        }
      })
    })
    window.close()
  })
}

var siteDir = jetpack.cwd(__dirname).cwd('_site')
var sitefilePaths = (process.argv[2]) ? [process.argv[2]] : siteDir.find({ matching: '*.html' })
var siteFiles = sitefilePaths.map(p => { return { path: p, text: siteDir.read(p, 'utf8') } })
siteFiles.forEach(htmlLinkCheck)