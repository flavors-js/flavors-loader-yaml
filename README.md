[![npm](https://img.shields.io/npm/v/flavors-loader-yaml.svg)](https://www.npmjs.com/package/flavors-loader-yaml)
[![Build Status](https://travis-ci.org/flavors-js/flavors-loader-yaml.svg?branch=master)](https://travis-ci.org/flavors-js/flavors-loader-yaml)
[![David](https://img.shields.io/david/flavors-js/flavors-loader-yaml.svg)](https://david-dm.org/flavors-js/flavors-loader-yaml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Join the chat at https://gitter.im/flavors-js/flavors](https://badges.gitter.im/flavors-js/flavors.svg)](https://gitter.im/flavors-js/flavors?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# flavors YAML loader

YAML configuration loader for [flavors](https://github.com/flavors-js/flavors) library.<br>
[js-yaml](https://github.com/nodeca/js-yaml) is used for YAML parsing.

## Install

```bash
$ npm install --save-dev flavors-loader-yaml
```

## Usage

```javascript
const flavors = require('flavors');
const config = flavors('my-config', {
  loaders: [require('flavors-loader-yaml')]
});
```

### Configuration definition

Configuration definition is the same as when using [JSON loader](https://github.com/flavors-js/flavors#json-loader).

## Maintainers

- [@mxl](https://github.com/mxl)

## License

See the [LICENSE](https://github.com/flavors-js/flavors-loader-yaml/blob/master/LICENSE) file for details.
