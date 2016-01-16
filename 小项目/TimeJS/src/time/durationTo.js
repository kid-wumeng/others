/**
 * @PROTO  this.durationTo( end )
 * @PARAM! { Time } end
 * @RETURN { Duration }
 */

Time.fn.durationTo = function( end ){
    return new Duration( this, end )
}