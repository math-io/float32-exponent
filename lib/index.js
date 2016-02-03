'use strict';

// MODULES //

var getWord = require( 'math-float32-to-word' );


// VARIABLES //

// Exponent mask: 0 11111111 00000000000000000000000
var EXP_MASK = 0x7f800000;
var BIAS = 127|0; // use asm.js annotation to denote an integer


// EXPONENT //

/**
* FUNCTION: exponent( x )
*	Returns an integer corresponding to the unbiased exponent of a single-precision floating-point number.
*
* @param {Number} x - single-precision floating-point number
* @returns {Number} unbiased exponent
*/
function exponent( x ) {
	// Convert `x` to an unsigned 32-bit integer corresponding to the IEEE 754 binary representation:
	var w = getWord( x );

	// Apply a mask to isolate only the exponent bits and then shift off all bits which are part of the fraction:
	w = ( w & EXP_MASK ) >>> 23;

	// Remove the bias and return:
	return w - BIAS;
} // end FUNCTION exponent()


// EXPORTS //

module.exports = exponent;
