# mergr

[![Build Status](https://travis-ci.org/xasdx/mergr.svg?branch=master)](https://travis-ci.org/xasdx/mergr)

> Simple package that merges objects

## Usage

```js
let mergr = require("mergr")

let objA = { a: 0 }
let objB = { b: "1" }

let objC = mergr([objA, objB]) // => { a: 0, b: "1" }

// set the second parameter to false so the properties
// will not get overwritten in the merging process
mergr([objC, { b: true, c: false }], false) // => { a: 0, b: "1", c: false }
```
