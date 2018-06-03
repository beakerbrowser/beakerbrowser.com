document.querySelectorAll('.toggleable-container').forEach(el => el.addEventListener('click', toggle))
document.querySelectorAll('.toggleable').forEach((el, i) => el.dataset.index = i)
document.body.addEventListener('click', handleClick)

function toggle (e) {
  // toggle the current element
  var currentToggleEl = e.currentTarget.querySelector('.toggleable')
  currentToggleEl.classList.toggle('visible')

  closeAllToggleables(currentToggleEl)
}

function closeAllToggleables (currentToggleEl = null)  {
  document.querySelectorAll('.toggleable').forEach(el => {
    if (!currentToggleEl || (el.dataset.index !== currentToggleEl.dataset.index)) {
      el.classList.remove('visible')
    }
  })
}

function handleClick (e) {
  console.log(e.target)
}