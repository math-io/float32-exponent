Exponent
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns an integer corresponding to the unbiased exponent of a [single-precision floating-point number][ieee754].


## Installation

``` bash
$ npm install math-float32-exponent
```


## Usage

``` javascript
var exponent = require( 'math-float32-exponent' );
```

#### exponent( x )

Returns an `integer` corresponding to the unbiased exponent of a [single-precision floating-point number][ieee754].

``` javascript
var toFloat32 = require( 'float64-to-float32' );

var exp = exponent( toFloat32( 3.14e34 ) );
// returns 114 => 2**114 ~ 2.08e34

exp = exponent( toFloat32( 3.14e-34 ) );
// returns -112 => 2**-112 ~ 1.93e-34

exp = exponent( toFloat32( -3.14 ) );
// returns 1

exp = exponent( 0 );
// returns 0

exp = exponent( NaN );
// returns 128
```


## Examples

``` javascript
var round = require( 'math-round' );
var pow = require( 'math-power' );
var toFloat32 = require( 'float64-to-float32' );
var exponent = require( 'math-float32-exponent' );

var frac;
var exp;
var x;
var e;
var i;

// Generate random numbers and extract their exponents...
for ( i = 0; i < 100; i++ ) {
	frac = Math.random() * 10;
	exp = round( Math.random()*44 ) - 22;
	x = frac * pow( 10, exp );
	x = toFloat32( x );
	e = exponent( x );
	console.log( 'x: %d. unbiased exponent: %d.', x, e );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-float32-exponent.svg
[npm-url]: https://npmjs.org/package/math-float32-exponent

[build-image]: http://img.shields.io/travis/math-io/float32-exponent/master.svg
[build-url]: https://travis-ci.org/math-io/float32-exponent

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/float32-exponent/master.svg
[coverage-url]: https://codecov.io/github/math-io/float32-exponent?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/float32-exponent.svg
[dependencies-url]: https://david-dm.org/math-io/float32-exponent

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/float32-exponent.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/float32-exponent

[github-issues-image]: http://img.shields.io/github/issues/math-io/float32-exponent.svg
[github-issues-url]: https://github.com/math-io/float32-exponent/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985
