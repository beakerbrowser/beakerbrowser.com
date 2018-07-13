document.querySelectorAll('.toggleable-container').forEach(el => el.addEventListener('click', toggle))
document.querySelectorAll('.toggleable').forEach(el => el.addEventListener('click', onClickToggleableItem))
document.body.addEventListener('click', closeAllToggleables, true)

function toggle (e) {
  console.log('toggling')
  e.currentTarget.querySelector('.toggleable').classList.toggle('visible')
}

function onClickToggleableItem (e) {
  e.stopPropagation()
  closeAllToggleables()
}

function closeAllToggleables ()  {
  console.log('clsoing all')
  document.querySelectorAll('.toggleable').forEach(el => {
    el.classList.remove('visible')
  })
}
