/**
 * @PROTO  new Time()
 * @RETURN { Time } now
 *
 * @PROTO  new Time( date )
 * @PARAM! { Date } date
 * @RETURN { Time }
 *
 * @PROTO  new Time( year, month, day, hour, minute, second, ms )
 * @PARAM! { int } year
 * @PARAM  { int } month
 * @PARAM  { int } day
 * @PARAM  { int } hour
 * @PARAM  { int } minute
 * @PARAM  { int } second
 * @PARAM  { int } ms
 * @RETURN { Time }
 *
 * @PROTO  new Time( string, format )
 * @PARAM! { String } string
 * @PARAM  { String } format - The default refer to initByString
 * @RETURN { Time }
 */

Time = function( p1, p2, p3, p4, p5, p6, p7 ){

    this.date   = null
    this.year   = null
    this.month  = null
    this.day    = null
    this.hour   = null
    this.hour12 = null
    this.hour24 = null
    this.minute = null
    this.second = null
    this.ms     = null
    this.stamp  = null

    // new Time()
    if( p1 === undefined ){
        this.date = new Date()
    } else {
        switch( p1.constructor ){
            // new Time( date )
            case Date:
                this.date = p1
                this.sync()
                return this
            // new Time( year, month, day, hour, minute, second, ms )
            case Number:
                return initByNumber( p1, p2, p3, p4, p5, p6, p7 )
            // new Time( string, format )
            case String:
                return initByString( p1, p2 )
        }
    }
}

Time.fn = Time.prototype