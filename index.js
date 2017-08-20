'use strict';

const
  fs = require('fs'),
  yaml = require('js-yaml');

module.exports = {
  extension: '.yaml',
  loader: configFile => {
    const c = yaml.load(fs.readFileSync(configFile, 'utf8'));
    let _extends, load, merge;
    if (typeof c.extends === 'string') {
      _extends = c.extends;
    }
    if (typeof c.merge === 'boolean') {
      merge = c.merge;
    }
    if (typeof c.load === 'object') {
      load = _ => c.load;
    }
    if (_extends === undefined && load === undefined && merge === undefined) {
      load = _ => c;
    }
    return {
      extends: _extends,
      load: load,
      merge: merge
    };
  }
};
