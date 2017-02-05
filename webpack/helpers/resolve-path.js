const path = require('path')

module.exports = function resolvePath(url) {
  return path.resolve(__dirname, '../..', url)
}
