document.body.addEventListener('click', onGlobalClick)

function onGlobalClick (e)  {
  // get the toggleable container related to this click
  var toggleableContainer
  var node = e.target
  while (node) {
    if (node.classList && node.classList.contains('toggleable-container')) {
      toggleableContainer = node
      break
    }
    node = node.parentNode
  }
  var toggleable
  if (toggleableContainer) {
    toggleable = toggleableContainer.querySelector('.toggleable')
  }

  // capture state
  var wasVisible = toggleable && toggleable.classList.contains('visible')

  // close all toggleables
  document.querySelectorAll('.toggleable').forEach(el => {
    el.classList.remove('visible')
  })

  // show the toggleable if it was hidden
  if (toggleable && !wasVisible) {
    toggleable.classList.add('visible')
  }
}
