# peer-compatible

[![Greenkeeper badge](https://badges.greenkeeper.io/jeysal/peer-compatible.svg)](https://greenkeeper.io/)

> Find versions of a package that work with given peer dependencies

[![build status](https://img.shields.io/travis/jeysal/peer-compatible.svg?style=flat-square)](https://travis-ci.org/jeysal/peer-compatible)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/jeysal/peer-compatible.svg?style=flat-square&label=windows+build)](https://ci.appveyor.com/project/jeysal/peer-compatible)
[![code coverage](https://img.shields.io/codecov/c/github/jeysal/peer-compatible.svg?style=flat-square)](https://codecov.io/gh/jeysal/peer-compatible)

[![npm package](https://img.shields.io/npm/v/peer-compatible.svg?style=flat-square)](https://www.npmjs.com/package/peer-compatible)
[![license](https://img.shields.io/github/license/jeysal/peer-compatible.svg?style=flat-square)](https://github.com/jeysal/peer-compatible/blob/master/LICENSE)

## Installation

    npm install --save peer-compatible

## Usage

```javascript
const compatible = require('peer-compatible').default;
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### index

Finds versions of pkgName that work with given peers.
Given extra peers that the package does not require at all are considered to be compatible.

**Parameters**

-   `pkgName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The package to search for.
-   `peers` **{}** The peers that found versions need to be compatible with,
    formatted like a regular peer dependency object literal.
    Versions must be exact, ranges are not supported.

**Examples**

```javascript
peerCompatible('some-component-lib', { 'some-framework-core-lib': '1.0.0' })
  .then(versions => console.log(versions));
```

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>>** The versions of the package that work with given peers.

## CLI version

[peer-compatible-cli](https://github.com/jeysal/peer-compatible-cli)
