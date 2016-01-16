/**
 * @PROTO  this.sync()
 * @RETURN { Duration }
 *
 * Should be run when thie.start or this.end is changed ( such as new ... )
 * The all public attributes will be updated
 * Please don't run this method outside, anytime
 */

Duration.fn.sync = function()
{
    this.year   = this.get('year')
    this.month  = this.get('month')
    this.day    = this.get('day')
    this.hour   = this.get('hour')
    this.minute = this.get('minute')
    this.second = this.get('second')
    this.ms     = this.get('ms')

    this.all.year   = this.getAll('year')
    this.all.month  = this.getAll('month')
    this.all.day    = this.getAll('day')
    this.all.hour   = this.getAll('hour')
    this.all.minute = this.getAll('minute')
    this.all.second = this.getAll('second')
    this.all.ms     = this.getAll('ms')

    return this
}