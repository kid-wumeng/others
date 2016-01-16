/**
 * @PROTO  this.log()
 * @RETURN { Time }
 *
 * Print time's string by default format
 * Only work in the environment to support console.log
 */

Time.fn.log = function(){
    if( console && console.log )
        console.log(this.toString())
    return this
}