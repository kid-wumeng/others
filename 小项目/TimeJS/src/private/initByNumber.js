/**
 * @PROTO  initByNumber( year, month, day, hour, minute, second, ms )
 * @PARAM  { int } year
 * @PARAM  { int } month
 * @PARAM  { int } day
 * @PARAM  { int } hour
 * @PARAM  { int } minute
 * @PARAM  { int } second
 * @PARAM  { int } ms
 * @RETURN { Time }
 */

function initByNumber( year, month, day, hour, minute, second, ms ){
    month  = month  || 1
    day    = day    || 1
    hour   = hour   || 0
    minute = minute || 0
    second = second || 0
    ms     = ms     || 0
    var date = new Date( year, month-1, day, hour, minute, second, ms )
    return new Time( date )
}