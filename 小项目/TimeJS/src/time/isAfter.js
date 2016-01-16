/**
 * @PROTO  this.isAfter( target )
 * @PARAM! { Time } target
 * @RETURN { Boolean }
 */

Time.fn.isAfter = function( target ){
    if( typeof target === 'string' ){
        target = new Time( target )
    }
    return this.stamp > target.stamp
}