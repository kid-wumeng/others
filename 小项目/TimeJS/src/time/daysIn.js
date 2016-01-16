/**
 * @PROTO  this.daysIn( attr )
 * @PARAM! { String } attr - Select in 'year' / 'month'
 * @RETURN { int } days
 */

Time.fn.daysIn = function( attr ){
    var now, next
    switch( attr )
    {
        case 'year':
            // The this and next year
            now  = new Time( this.year )
            next = new Time( this.year + 1 )
            break
        case 'month':
            // The this and next month
            now  = new Time( this.year, this.month )
            next = now.clone().add('month',1)
    }
    return now.durationTo( next ).getAll('day')
}