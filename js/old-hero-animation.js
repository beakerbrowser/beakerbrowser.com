var NUM_LINES = 80
var MAX_Y = 340
var MAX_X = 960
var HALF_X = MAX_X / 2
var HALF_Y = MAX_Y / 2
var MIN_WIDTH = 10
var MAX_WIDTH = 200

var canvas = document.getElementById('hero-animated-bg')
var ctx = canvas.getContext('2d')

// array of active & moving lines
var lines = []

// populate
for (var i=0; i < NUM_LINES; i++) {
  lines.push({
    x: getRandomInt(0, MAX_X),
    y: (i / NUM_LINES) * MAX_Y, //averageNSamples(getRandomInt.bind(window, 0, MAX_Y), 5),
    width: averageNSamples(getRandomInt.bind(window, MIN_WIDTH, MAX_WIDTH), 5),
    vel: getRandomInt(0, 1) ? -1 : 1,
    opacity: 1,//getRandomArbitrary(0.05, 0.95),
    lineWidth: 2,//getRandomArbitrary(0.5, 3)
  })
}

// render loop
window.requestAnimationFrame(draw)
function draw() {
  ctx.clearRect(0, 0, MAX_X, MAX_Y)

  for (var i = 0; i < NUM_LINES; i++) {
    var middleX = lines[i].x + (lines[i].width / 2)

    // draw
    ctx.beginPath()
    ctx.strokeStyle = '#016fde'
    ctx.globalAlpha = clamp((
      (0.8 - (Math.abs(HALF_Y - lines[i].y) / HALF_Y)) * // fade out at top/bottom edges
      (0.8 - (Math.abs(HALF_X - middleX) / HALF_X)) // fade out at left/right edges
    ), 0, 1) * lines[i].opacity
    ctx.lineWidth = lines[i].lineWidth
    ctx.moveTo(lines[i].x, lines[i].y)
    ctx.lineTo(lines[i].x + lines[i].width, lines[i].y)
    ctx.stroke()

    // move
    lines[i].x += lines[i].vel

    // pacman the edges
    if (lines[i].x + lines[i].width < 0)
      lines[i].x += MAX_X
    else if (lines[i].x > MAX_X)
      lines[i].x = -lines[i].width
  }
  window.requestAnimationFrame(draw)
}


// helpers
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp (v, min, max) {
  return Math.min(Math.max(v, min), max)
}

function averageNSamples (fn, N) {
  var sum = 0
  for (var i = 0; i < N; i++)
    sum += fn()
  return sum / N
}