/**
 * @PROTO  this.get( attr )
 * @PARAM! { String } attr - Select in 'year' / 'month' / 'day' / 'hour' / 'hour12' / 'hour24' / 'minute' / 'second' / 'ms'
 * @RETURN { int }    value
 */

Time.fn.get = function( attr )
{
    var date = this.date

    if( attr === 'ms' ){
        return date.getTime() - Date.parse( date )
    }

    switch( attr ){
        case 'year':   return date.getFullYear()
        case 'month':  return date.getMonth() + 1
        case 'day':    return date.getDate()
        case 'hour':   return date.getHours()
        case 'hour12': return date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
        case 'hour24': return date.getHours()
        case 'minute': return date.getMinutes()
        case 'second': return date.getSeconds()

        // Date.parse(date) or date.valueOf()
        // return a stamp at local time zone
        // For example, from 1970-1-1 8:0:0.000 ( in Beijing )
        case 'stamp':  return date.getTime()
    }
}