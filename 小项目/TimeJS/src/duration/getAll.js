/**
 * @PROTO  this.getAll( attr )
 * @PARAM! { String } attr - Select in 'year' / 'month' / 'day' / 'hour' / 'minute' / 'second' / 'ms'
 * @RETURN { int }    value
 */

Duration.fn.getAll = function( attr ){

    var start = this.start.clone(),
        end = this.end.clone()

    if(start.isAfter(end)){
        return 0
    }

    // The duration ms between start and end
    var d_MS = end.stamp - start.stamp

    // For example, one minute = ? ms
    var One = {
        Second: 1000,
        Minute: 1000 * 60,
        Hour:   1000 * 60 * 60,
        Day:    1000 * 60 * 60 * 24
    }

    switch( attr ){
        case 'year':   return this.year
        case 'month':  return this.year * 12 + this.month
        case 'day':    return Math.floor( d_MS / One.Day )
        case 'hour':   return Math.floor( d_MS / One.Hour )
        case 'minute': return Math.floor( d_MS / One.Minute )
        case 'second': return Math.floor( d_MS / One.Second )
        case 'ms':     return d_MS
    }
}