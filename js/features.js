var features = document.querySelectorAll('.features-nav-item')

features.forEach(function (el) {
  el.addEventListener('click', setActiveFeature)
})

function setActiveFeature (e) {
  features.forEach(function (el) {
    el.classList.remove('active')
  })
  e.currentTarget.classList.add('active')
  console.log(e.currentTarget)
}