/**
 * @PROTO  this.isPM()
 * @RETURN { Boolean }
 */

Time.fn.isPM = function(){
    return this.hour >= 12
}