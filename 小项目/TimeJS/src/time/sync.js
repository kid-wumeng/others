/**
 * @PROTO  this.sync()
 * @RETURN { Time }
 *
 * Should be run when this.date is changed ( such as new, this.set ... )
 * The all public attributes will be updated
 * Please don't run this method outside, anytime
 */

Time.fn.sync = function()
{
    this.year   = this.get('year')
    this.month  = this.get('month')
    this.day    = this.get('day')
    this.hour   = this.get('hour')
    this.hour12 = this.get('hour12')
    this.hour24 = this.get('hour24')
    this.minute = this.get('minute')
    this.second = this.get('second')
    this.ms     = this.get('ms')
    this.stamp  = this.get('stamp')

    return this
}