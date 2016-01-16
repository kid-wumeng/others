/**
 * @PROTO  this.isEqual( target )
 * @PARAM! { Time } target
 * @RETURN { Boolean }
 */

Time.fn.isEqual = function( target ){
    if( typeof target === 'string' ){
        target = new Time( target )
    }
    return this.stamp === target.stamp
}