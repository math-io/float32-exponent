'use strict';

var round = require( 'math-round' );
var pow = require( 'math-power' );
var toFloat32 = require( 'float64-to-float32' );
var exponent = require( './../lib' );

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