(function () {
  var showAllBtn = document.getElementById('show-all-testimonials')
  var wrapper = document.querySelector('.testimonials-wrapper')

  showAllBtn.onclick = function () {
    if (showAllBtn.innerHTML.includes('Show more')) {
      showAllBtn.innerHTML = '<span>Show less </span><span class="fa fa-angle-up"></span>'
    } else {
      showAllBtn.innerHTML = '<span>Show more </span><span class="fa fa-angle-down"></span>'
    }

    wrapper.classList.toggle('container')
    wrapper.classList.toggle('grid')
  }
})()
