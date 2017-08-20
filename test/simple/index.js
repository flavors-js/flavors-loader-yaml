'use strict'

const { assert, flavors, options } = require('../common.js')(__dirname);
const a = { value: 'a' };

describe('flavors YAML loader', function () {
  it('loads  config', function () {
    assert.deepEqual(flavors('a', options()), a);
  });
});
