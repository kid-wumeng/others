/**
 * @PROTO  this.isBefore( target )
 * @PARAM! { Time } target
 * @RETURN { Boolean }
 */

Time.fn.isBefore = function( target ){
    if( typeof target === 'string' ){
        target = new Time( target )
    }
    return this.stamp < target.stamp
}