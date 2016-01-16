/**
 * @PROTO  Time.today()
 * @RETURN { Time } today - the hour, minute, second, ms is set 0
 */

Time.today = function(){
    return Time.now()
      .set('hour',   0)
      .set('minute', 0)
      .set('second', 0)
      .set('ms',     0)
}