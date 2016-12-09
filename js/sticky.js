var OFFSET = 10

$$('.sticky').forEach(makeSticky)

function makeSticky (h) {
  var stuck = false;
  var stickPoint = getDistance();

  function getDistance() {
    var topDist = h.getClientRects()[0].top;
    return topDist;
  }

  window.addEventListener('scroll', function(e) {
    // mobile reset
    if (document.body.clientWidth <= 1024) {
      if (stuck) {
        h.style.position = 'static';
        stuck = false;
      }
      return
    }

    // calculate if we need to stick
    var distance = getDistance()
    var offset = window.pageYOffset;
    if ( (distance <= OFFSET) && !stuck) {
      h.style.position = 'fixed';
      h.style.top = OFFSET+'px';
      stuck = true;
    } else if (stuck && (offset <= (stickPoint-OFFSET))){
      h.style.position = 'relative';
      stuck = false;
    }
  })
}