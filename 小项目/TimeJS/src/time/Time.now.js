/**
 * @PROTO  Time.now()
 * @RETURN { Time } now
 */

Time.now = function(){
    return new Time( new Date )
}