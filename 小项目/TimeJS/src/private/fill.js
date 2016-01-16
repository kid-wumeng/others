/**
 * @PROTO  fill( number, bit_total )
 * @PARAM! { int } number    - Such as 6
 * @PARAM! { int } bit_total - Such as 3
 * @RETURN { String } number - Such as '006'
 */

var fill = function( number, bit_total ){
    var bit_zero, i
    number = number.toString()
    bit_zero = bit_total - number.length

    for( i = 0; i < bit_zero; i++ ){
        number = '0' + number
    }
    return number
}