/**
 * @PROTO  new Duration( start, end )
 * @PARAM! { Time } start
 * @PARAM! { Time } end
 */

Duration = function( start, end ){

    this.start = start.clone(),
    this.end   = end.clone()

    this.year   = null,
    this.month  = null,
    this.day    = null,
    this.hour   = null,
    this.minute = null,
    this.second = null,
    this.ms     = null

    this.all = {
        year:   null,
        month:  null,
        day:    null,
        hour:   null,
        minute: null,
        second: null,
        ms:     null
    }

    this.sync()
}

Duration.fn = Duration.prototype