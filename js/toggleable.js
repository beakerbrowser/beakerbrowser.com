document.querySelectorAll('.toggleable-container').forEach(el => el.addEventListener('click', toggle))
document.querySelectorAll('.toggleable').forEach((el, i) => el.dataset.index = i)

function toggle (e) {
  // toggle the current element
  var currentToggleEl = e.currentTarget.querySelector('.toggleable')
  currentToggleEl.classList.toggle('visible')

  // close all other toggleables
  document.querySelectorAll('.toggleable').forEach(el => {
    if (el.dataset.index !== currentToggleEl.dataset.index) {
      el.classList.remove('visible')
    }
  })
}