import * as event from '../utils/event.js'
var data = 'init data'

function play(videoId) {
  console.log(videoId)
  event.emit('updateCurrentId', videoId)
}

function pause() {
  event.emit('updateCurrentId', '-1')
}

function getData() {
  console.log('getData')
  return data
}

function setData(value) {
  data = value
}

module.exports = {
  play: play,
  pause: pause,
  getData: getData,
  setData: setData
}