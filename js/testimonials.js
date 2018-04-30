(function () {
  var showAllBtn = document.getElementById('show-all-testimonials')
  var wrapper = document.querySelector('.testimonials-wrapper')

  showAllBtn.onclick = function () {
    wrapper.classList.add('container')
    wrapper.classList.add('grid')
  }
})()
