(function () {
  var form = document.getElementById('get-updates')
  var url = 'https://beakerbrowser.us18.list-manage.com/subscribe?u=db33f38f3fec96e74fbc0db79&id=83d89ff1b6'

  form.onsubmit = function (e) {
    var data = new FormData(form)
    var email = data.get('email')

    window.open(url + '&MERGE0=' + email, '_blank')

    return false
  }
})()