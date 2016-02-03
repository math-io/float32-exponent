'use strict';

// MODULES //

var tape = require( 'tape' );
var pinf = require( 'const-pinf-float32' );
var ninf = require( 'const-ninf-float32' );
var round = require( 'math-round' );
var pow = require( 'math-power' );
var toFloat32 = require( 'float64-to-float32' );
var bits = require( 'math-float32-bits' );
var exponent = require( './../lib' );


// VARIABLES //

var BIAS = 127;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof exponent === 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a number', function test( t ) {
	t.equal( typeof exponent( toFloat32( 3.14e30 ) ), 'number', 'returns a number' );
	t.end();
});

tape( 'the function returns an integer corresponding to the unbiased exponent of a single-precision floating-point number', function test( t ) {
	var expected;
	var actual;
	var sign;
	var frac;
	var exp;
	var x;
	var b;
	var i;

	for ( i = 0; i < 5e3; i++ ) {
		if ( Math.random() < 0.5 ) {
			sign = -1;
		} else {
			sign = 1;
		}
		frac = Math.random() * 10;
		exp = round( Math.random()*44 ) - 22;
		x = sign * frac * pow( 10, exp );

		b = bits( x );
		expected = parseInt( b.substring( 1, 9 ), 2 ) - BIAS;

		actual = exponent( toFloat32( x ) );
		t.equal( actual, expected, 'returns the unbiased exponent for ' + x );

	}
	t.end();
});

tape( 'the function returns the unbiased exponent for `+-0`', function test( t ) {
	t.equal( exponent( 0 ), -BIAS, 'returns -127' );
	t.equal( exponent( -0 ), -BIAS, 'returns -127' );
	t.end();
});

tape( 'the function returns the unbiased exponent for `+infinity`', function test( t ) {
	t.equal( exponent( pinf ), BIAS+1, 'returns 128' );
	t.end();
});

tape( 'the function returns the unbiased exponent for `-infinity`', function test( t ) {
	t.equal( exponent( ninf ), BIAS+1, 'returns 128' );
	t.end();
});

tape( 'the function returns the unbiased exponent for `NaN`', function test( t ) {
	t.equal( exponent( NaN ), BIAS+1, 'returns 128' );
	t.end();
});

tape( 'the function returns the unbiased exponent for subnormals', function test( t ) {
	t.equal( exponent( toFloat32( 3.14e-42 ) ), -BIAS, 'returns -127' );
	t.end();
});
