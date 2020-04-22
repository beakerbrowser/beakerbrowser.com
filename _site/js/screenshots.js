(function () {
  var subsections = document.querySelectorAll('.screenshot-container .subsection.selectable')
  subsections.forEach(function (s) {
    s.addEventListener('click', onSubsectionClick)
  })

  function onSubsectionClick (e) {
    var selectable = e.target.classList.contains('selectable')
      ? e.target
      : e.target.parentNode

    var src = selectable.dataset.src
    var imgTarget = document.getElementById('subsection-ss')
    imgTarget.src = src

    subsections.forEach(function (s) {
      s.classList.remove('active')
    })

    selectable.classList.add('active')
  }
})()