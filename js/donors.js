var xhr = new XMLHttpRequest()
xhr.onload = renderDonors
xhr.open('GET', '/js/donors.json')
xhr.send()

function renderDonors () {
  var donors = JSON.parse(this.responseText)
  var donorsEl = document.getElementById('donors')

  donorsEl.innerHTML = ''
  var donorEls = donors.forEach(function (d) {
    if (d.role !== 'CONTRIBUTOR' && d.role !== 'HOST') {
      donorsEl.appendChild(renderDonor(d))
    }
  })
}

function renderDonor (donor) {
  var el = document.createElement('div')
  el.classList.add('donor')
  el.title = donor.name + ' gave $' + donor.totalAmountDonated

  if (donor.image) {
    el.innerHTML = '<img class="avatar" src="' + donor.image + '"/>'
  } else {
    el.innerHTML = '<div class="avatar placeholder gray-bg"><i class="fa fa-heart"></i></div>'
  }

  return el
}