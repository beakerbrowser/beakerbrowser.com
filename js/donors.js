(function () {
  // donor IDs with avatars that 404
  var BLACKLIST = [16048, 7981, 10672]

  var xhr = new XMLHttpRequest()
  xhr.onload = renderDonors
  xhr.open('GET', '/js/donors.json')
  xhr.send()

  function renderDonors () {
    var donors = JSON.parse(this.responseText)
    var totalDonorCount = donors.length

    donors = donors.filter(d => d.image && d.role === 'BACKER' && BLACKLIST.indexOf(d.MemberId) === -1)
    var noAvatarCount = totalDonorCount - donors.length

    var donorsEl = document.getElementById('donors')
    donorsEl.innerHTML = ''

    var donorEls = donors.forEach(function (d) {
      donorsEl.appendChild(renderDonor(d))
    })

    var linkEl = document.createElement('a')
    linkEl.href = 'https://opencollective.com/beaker'
    linkEl.classList.add('donor')
    linkEl.innerText = '+ ' + noAvatarCount + ' other supporters'
    donorsEl.appendChild(linkEl)
  }

  function renderDonor (donor) {
    var el = document.createElement('a')
    el.href = donor.profile
    el.classList.add('donor')
    el.title = donor.name + ' gave $' + donor.totalAmountDonated
    el.innerHTML = '<img class="avatar" src="' + donor.image + '"/>'

    return el
  }
})()