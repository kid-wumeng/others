/**
 * @PROTO  this.age()
 * @RETURN { int } - Years form birth
 */

Time.fn.age = function(){
    var now = Time.now()
    return this.durationTo( now ).get('year')
}