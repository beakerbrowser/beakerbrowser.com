

document.addEventListener("DOMContentLoaded", function() {
  var sidebarEl = document.querySelector('.blog-sidebar')
  var scrollWithEl = document.getElementById('sidebar-scrollwith')
  var isFixed = false
  var TOP = (sidebarEl.getClientRects()[0].top - 50)

  window.addEventListener('scroll', function (e) {
    if (!isFixed && window.scrollY > TOP) {
      isFixed = true
      scrollWithEl.classList.add('fixed')
    }
    else if (isFixed && window.scrollY <= TOP) {
      isFixed = false
      scrollWithEl.classList.remove('fixed')
    }
  })
})