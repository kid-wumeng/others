/**
 * @PROTO  this.toString( format )
 * @PARAM  { String } format - The default: '{Y}-{M}-{D} {H24}:{I}:{S}.{MS}'
 * @RETURN { String } string
 */

Time.fn.toString = function( format )
{
    format = format || '{Y}-{M}-{D} {H24}:{I}:{S}.{MS}'

    var _this = this,
        Mark_Reg = /\{([^}]+)\}/g

    // Get string from time and format
    // A example:
    // time = new Time('2015-6-1')
    // format = '{y}/{M}/{D}'
    // string = '15/06/01'
    return format.replace( Mark_Reg, function( _, mark ){
        switch( mark ){
            case 'Y':   return _this.year
            case 'M':   return fill( _this.month,  2 )
            case 'D':   return fill( _this.day,    2 )
            case 'H':   return fill( _this.hour,   2 )
            case 'H24': return fill( _this.hour24, 2 )
            case 'H12': return fill( _this.hour12, 2 )
            case 'I':   return fill( _this.minute, 2 )
            case 'S':   return fill( _this.second, 2 )
            case 'MS':  return fill( _this.ms,     3 )

            case 'y':   return _this.year % 100
            case 'm':   return _this.month
            case 'd':   return _this.day
            case 'h':   return _this.hour
            case 'h24': return _this.hour24
            case 'h12': return _this.hour12
            case 'i':   return _this.minute
            case 's':   return _this.second
            case 'ms':  return _this.ms
        }
    })
}