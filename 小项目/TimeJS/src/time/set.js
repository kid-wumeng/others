/**
 * @PROTO  this.set( attr, value )
 * @PARAM! { String } attr - Select in 'year' / 'month' / 'day' / 'hour' / 'minute' / 'second' / 'ms'
 * @PARAM! { int }    value
 * @RETURN { Time }
 */

Time.fn.set = function( attr, value )
{
    var date = this.date

    if( attr === 'ms' ){
        var stamp = Date.parse( date ) + value
        date.setTime( stamp )
    } else {
        switch( attr ){
            case 'year':   date.setFullYear( value );  break
            case 'month':  date.setMonth( value - 1 ); break
            case 'day':    date.setDate( value );      break
            case 'hour':   date.setHours( value );     break
            case 'minute': date.setMinutes( value );   break
            case 'second': date.setSeconds( value );   break
            case 'stamp':  date.setTime( value );      break
        }
    }
    this.sync()
    return this
}