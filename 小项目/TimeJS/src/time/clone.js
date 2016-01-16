/**
 * @PROTO  this.clone()
 * @RETURN { Time } - new time
 *
 * The new time is same as old time in follow attributes:
 * year, month, day, hour, minute, second, ms
 * But the two are different object
 */

Time.fn.clone = function(){
    return new Time(
        this.year,
        this.month,
        this.day,
        this.hour,
        this.minute,
        this.second,
        this.ms
    )
}