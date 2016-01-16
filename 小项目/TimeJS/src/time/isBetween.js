/**
 * @PROTO  this.isBetween( start, end )
 * @PARAM! { Time } start
 * @PARAM! { Time } end
 * @RETURN { Boolean }
 */

Time.fn.isBetween = function( start, end ){
    if( typeof start === 'string' ){
        start = new Time( start )
    }
    if( typeof end === 'string' ){
        end = new Time( end )
    }
    return this.isAfter( start ) && this.isBefore( end )
}