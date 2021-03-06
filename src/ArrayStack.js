
/**
 * ArrayStack#peek only valid if ArrayStack#empty is false.
 * ArrayStack#pop only valid if ArrayStack#empty is false.
 * ArrayStack#push only valid if the storage array is not full.
 */

export default function ArrayStack ( array ) {

	this.array = array ;
	this.top = -1 ;

}


ArrayStack.prototype.empty = function ( ) {

	return this.top === -1 ;

} ;

/**
 * Only valid if ArrayStack#empty is false.
 */

ArrayStack.prototype.peek = function ( ) {

	return this.array[this.top] ;

} ;

/**
 * Only valid if the storage array is not full.
 */

ArrayStack.prototype.push = function ( value ) {

	++this.top ;
	this.array[this.top] = value ;

} ;

/**
 * Only valid if ArrayStack#empty is false.
 */

ArrayStack.prototype.pop = function ( ) {

	const value = this.array[this.top] ;

	// clean up for gc
	// 0 is for support of typed arrays
	this.array[this.top] = 0 ;

	--this.top ;

	return value ;

} ;


