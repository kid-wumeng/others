/**
 * @PROTO  this.get( attr )
 * @PARAM! { String } attr - Select in 'year' / 'month' / 'day' / 'hour' / 'minute' / 'second' / 'ms'
 * @RETURN { int }    value
 */

Duration.fn.get = function( attr ){

    var result,
        start = this.start.clone(),
        end = this.end.clone()

    if(start.isAfter(end)){
        return 0
    }

    // The duration ms between start and end
    var d_MS = end.stamp - start.stamp

    // The total days of each month ( except month 2 )
    var Days = [ null, 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

    // For example, one minute = ? ms
    var One = {
        Second: 1000,
        Minute: 1000 * 60,
        Hour:   1000 * 60 * 60,
        Day:    1000 * 60 * 60 * 24
    }


    switch( attr ){
        case 'year':   result = countYear(start,end);  break
        case 'month':  result = countMonth(start,end); break
        case 'day':    result = countDay(start,end);   break
        case 'hour':   result = Math.floor( d_MS % One.Day / One.Hour );      break
        case 'minute': result = Math.floor( d_MS % One.Hour / One.Minute );   break
        case 'second': result = Math.floor( d_MS % One.Minute / One.Second ); break
        case 'ms':     result = Math.floor( d_MS % One.Second );              break
    }


    return result >= 0 ? result : 0


    function countYear( start, end ){
        // The difference: end's year - start's year
        var d = end.year - start.year
        start.set('year',end.year)
        // For example, 1.2 year -> 1 year
        return start.isAfter(end) ? d - 1 : d
    }


    function countMonth( start, end )
    {
        start.set('year',end.year)
        // start = end
        if(start.isEqual(end)){
            return 0
        }

        var result
        if(start.isBefore(end)){
            // start < end
            // Add month until start >= end
            result = 0
            start.add('month',1)
            while(end.isAfter(start)){
                result++
                start.add('month',1)
            }
        } else {
            // start > end
            // Sub month until start <= end
            result = 11
            start.sub('month',1)
            while(start.isAfter(end)){
                result--
                start.sub('month',1)
            }
        }
        return result
    }


    function countDay( start, end ){
        // The this and last month
        var now = end.month
        var last = now - 1 > 0 ? now - 1 : 12

        // The difference: end's day - start's day
        var d = end.day - start.day
        if( d >= 0 )
            return d
        else
            if( last === 2 )
                // month 2
                // Add 29 ( when leap year )
                // Add 28 ( when common year )
                return end.isLeapYear() ? 29 + d : 28 + d
            else
                return Days[last] + d
    }
}