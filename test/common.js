'use strict';

module.exports = function (workingDir, options) {
  return {
    assert: require('assert'),
    flavors: require('flavors'),
    options: customOptions => Object.assign({ loaders: [require('..')], workingDir: workingDir }, options || {}, customOptions || {})
  };
};
