document.querySelectorAll('.toggleable-container').forEach(el => el.addEventListener('click', toggle))
document.querySelectorAll('.toggleable').forEach(el => el.addEventListener('click', onClickToggleableItem))
document.body.addEventListener('click', closeAllToggleables, true)

function toggle (e) {
  e.currentTarget.querySelector('.toggleable').classList.toggle('visible')
}

function onClickToggleableItem (e) {
  e.stopPropagation()
  closeAllToggleables()
}

function closeAllToggleables ()  {
  document.querySelectorAll('.toggleable').forEach(el => {
    el.classList.remove('visible')
  })
}
