var moduleA = require('./moduleA.js');
require.ensure(['./moduleB.js'], function(require) {
    // Lazy load
    var moduleB = ('./moduleB.js');
})

module.exports = [moduleA, moduleB];
