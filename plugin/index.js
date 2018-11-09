let api = require('./api/api.js')

module.exports = {
  getData: api.getData,
  setData: api.setData,
  play: api.play,
  pause: api.pause
}