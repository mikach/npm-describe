# npm-describe [![NPM version][npm-image]][npm-url]

NPM package dependencies visualization

## Usage

Installation: 
```
$ npm install -g npm-describe
```
Usage:
```
$ npm-describe -p jquery@~1.8
```
Result:
```
  jquery @~1.8
  |  jsdom @~0.2.14
  |  |  htmlparser @1.x
  |  |  request @2.x
  |  |  |  qs @~0.6.0
  |  |  |  json-stringify-safe @~5.0.0
  |  |  |  forever-agent @~0.5.0
  |  |  |  node-uuid @~1.4.0
  |  |  |  mime @~1.2.9
  |  |  |  tough-cookie @>=0.12.0
  |  |  |  |  punycode @>=0.2.0
  |  |  |  form-data @~0.1.0
  |  |  |  |  combined-stream @~0.0.4
  |  |  |  |  |  delayed-stream @0.0.5
  |  |  |  |  mime @~1.2.11
  |  |  |  |  async @~0.2.9
  |  |  |  tunnel-agent @~0.3.0
  |  |  |  http-signature @~0.10.0
  |  |  |  |  assert-plus @0.1.2
  |  |  |  |  asn1 @0.1.11
  |  |  |  |  ctype @0.5.2
  |  |  |  oauth-sign @~0.3.0
  |  |  |  hawk @~1.0.0
  |  |  |  |  hoek @0.9.x
  |  |  |  |  boom @0.4.x
  |  |  |  |  |  hoek @0.9.x
  |  |  |  |  cryptiles @0.2.x
  |  |  |  |  |  boom @0.4.x
  |  |  |  |  |  |  hoek @0.9.x
  |  |  |  |  sntp @0.2.x
  |  |  |  |  |  hoek @0.9.x
  |  |  |  aws-sign2 @~0.5.0
  |  |  cssom @0.2.x
  |  |  cssstyle @>=0.2.3
  |  |  |  cssom @0.3.x
  |  |  contextify @0.1.x
  |  |  |  bindings @*
  |  htmlparser @1.7.6
  |  xmlhttprequest @~1.4.2
  |  location @0.0.1
  |  navigator @~1.0.1
  |  contextify @~0.1.3
  |  |  bindings @*

```

### Reading from package.json file
```
$ npm-describe -f path/to/your/package
```

## Node API

```js
var desc = require('npm-describe');
```
### Methods:

`getPackageDeps(package, function(err, res) {})` - returns dependencies of package.
`package` can be in format name@version.

`desc.getPackageDepsTree(package, function(tree) {})` - returns full tree of package's dependencies.

`desc.printTree(tree)` - prints tree.

## License (MIT)

Copyright (c) 2014 Michael Kachanovskyi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm-url]: https://npmjs.org/package/npm-describe
[npm-image]: https://badge.fury.io/js/npm-describe.png
