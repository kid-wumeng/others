/**
 * @PROTO  this.toString( format )
 * @PARAM  { String } format - The default: '{Y}-{M}-{D} {H24}:{I}:{S}.{MS}'
 * @RETURN { String } string
 *
 * Support the {all.x}
 */

Duration.fn.toString = function( format )
{
    format = format || '{Y}-{M}-{D} {H}:{I}:{S}.{MS}'

    var _this = this,
        Mark_Reg = /\{([^}]+)\}/g

    // Get string from time and format
    // A example:
    // duration = 2013-8-5 ~ 2015-6-1
    // format = '{y}/{M}/{D}'
    // string = '01/09/27'
    return format.replace( Mark_Reg, function( _, mark )
    {
        switch( mark )
        {
            case 'Y':   return fill( _this.year,   2 )
            case 'M':   return fill( _this.month,  2 )
            case 'D':   return fill( _this.day,    2 )
            case 'H':   return fill( _this.hour,   2 )
            case 'I':   return fill( _this.minute, 2 )
            case 'S':   return fill( _this.second, 2 )
            case 'MS':  return fill( _this.ms,     3 )

            case 'y':   return _this.year % 100
            case 'm':   return _this.month
            case 'd':   return _this.day
            case 'h':   return _this.hour
            case 'i':   return _this.minute
            case 's':   return _this.second
            case 'ms':  return _this.ms

            case 'all.y':   return _this.all.year
            case 'all.m':   return _this.all.month
            case 'all.d':   return _this.all.day
            case 'all.h':   return _this.all.hour
            case 'all.i':   return _this.all.minute
            case 'all.s':   return _this.all.second
            case 'all.ms':  return _this.all.ms
        }
    })
}