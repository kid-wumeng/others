/**
 * @PROTO  this.add( attr, value )
 * @PARAM! { String } attr  - Select in 'year' / 'month' / 'day' / 'hour' / 'minute' / 'second' / 'ms'
 * @PARAM  { int }    value - The default: 1
 * @RETURN { Time }
 */

Time.fn.add = function( attr, value ){
    value = value || 1
    value = this.get( attr ) + value
    return this.set( attr, value )
}