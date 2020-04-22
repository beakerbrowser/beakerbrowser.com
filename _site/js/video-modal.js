/*if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
  // only do this on http/s
  setupVideoModal()
}

function setupVideoModal () {
  var btn = document.getElementById('video-modal-btn')
  var modal = document.getElementById('video-modal')

  document.addEventListener('click', function (e) {
    // this will only register for clicks in the current frame
    // since it is regsitered before the btn click, it will come before it
    modal.classList.remove('show')
  }, true)

  btn.addEventListener('click', function (e) {
    e.preventDefault()
    modal.classList.add('show')
  })

  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
      // hide on escape
      modal.classList.remove('show')
    }
  })
}
*/