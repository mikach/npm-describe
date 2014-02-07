# Describe

NPM package dependencies visualization

## Usage

Installation: 
```
$ npm install -g npm-describe
```
Usage:
```
$ npm-descibe -p jquery@~1.8
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
