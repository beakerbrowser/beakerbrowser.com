var $ = document.querySelector.bind(document)
var $$ = function (selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector))
}

window.addEventListener('load', function (event){
  var headers = $$('.doc-body h2, .doc-body h3, .doc-body h4')
  if (headers.length <= 1) return // dont bother

  var parts = headers.map(function (h) {
    return '<p><a class="doc-link from-' + h.tagName.toLowerCase() + '" href="#' + h.id + '">' + (h.textContent || h.innerText) + '</a></p>'
  })
  $('#toc').className = 'doc-nav-section'
  $('#toc').innerHTML = parts.join('') + '<hr class="nomargin" />'
})