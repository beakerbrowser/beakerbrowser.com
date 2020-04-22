document.querySelectorAll('.collapseable-btn').forEach(el => el.addEventListener('click', toggleCollapsed))

function toggleCollapsed (e) {
  var collapseableEl = e.currentTarget.parentNode.querySelector('.collapseable')
  e.currentTarget.classList.toggle('collapsed')
  collapseableEl.classList.toggle('collapsed')
}