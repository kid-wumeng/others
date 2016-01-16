/**
 * @PROTO  this.isAM()
 * @RETURN { Boolean }
 */

Time.fn.isAM = function(){
    return this.hour < 12
}