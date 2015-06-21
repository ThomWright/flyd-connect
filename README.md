flyd-connect
=================

[![Travis](https://img.shields.io/travis/ThomWright/flyd-connect.svg?style=flat-square)](https://travis-ci.org/ThomWright/flyd-connect)
[![npm](https://img.shields.io/npm/v/flyd-connect.svg?style=flat-square)](https://www.npmjs.com/package/flyd-connect)
[![David](https://img.shields.io/david/ThomWright/flyd-connect.svg?style=flat-square)](https://david-dm.org/ThomWright/flyd-connect)
[![David](https://img.shields.io/david/dev/ThomWright/flyd-connect.svg?style=flat-square)](https://david-dm.org/ThomWright/flyd-connect#info=devDependencies)

Connects the output of one stream to the input of another.

**Signature**

`Stream -> Stream -> Stream`

**Usage**

```javascript
import flyd from 'flyd';
import connect from 'flyd-connect';

const s1 = flyd.stream();
const s2 = s1.map(x => x * 2);

const s3 = flyd.stream();
const s4 = s2.map(x => x + 1);

connect(s2, s3);
// alternatively:
connect(s2).to(s3);

flyd.on((x) => {
  console.log('2x + 1 =', x);
}, s4);

[1, 2, 3, 4, 5]
  .forEach(n => s1(n));

// Output 3
// Output 5
// Output 7
// Output 9
// Output 11
```
