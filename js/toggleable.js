document.body.addEventListener('click', onGlobalClick)

function onGlobalClick (e)  {
  // get the toggleable container related to this click
  var toggleableContainer 
  for (var i = 0; i < e.path.length; i++) {
    if (e.path[i].classList && e.path[i].classList.contains('toggleable-container')) {
      toggleableContainer = e.path[i]
      break
    }
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
