/**
 * @PROTO  new Time( string, format )
 * @PARAM! { String } string
 * @PARAM  { String } format - The default refer to Default_Formats in function
 * @RETURN { Time }
 */

function initByString( string, format ){

    // If string is undefined or ''
    // Create the time: thisYear-1-1 0:0:0.0
    if( !string ){
        return Time.initObject()
    }

    // Time formats by default
    // There will match the string one by one
    // First, try to match string by {y}
    // If failed, try to match string by {y}-{m}
    // If failed again, try to match string by {y}-{m}-{d}
    // ... And the like
    var Default_Formats = [
        '{y}',
        '{y}-{m}',
        '{y}-{m}-{d}',
        '{y}-{m}-{d} {h}',
        '{y}-{m}-{d} {h}:{i}',
        '{y}-{m}-{d} {h}:{i}:{s}',
        '{y}-{m}-{d} {h}:{i}:{s}.{ms}'
    ]


    // Match the marks, such as {y}, {m} ... and so on
    var Mark_Reg = /\{([^}]+)\}/g

    // { String[] } - Collect the matched marks
    var marks



    // Parse each time field from string and format
    // A example:
    // string = '2015-6-1'
    // format = '{y}-{m}-{d}'
    // numbers = [ 2015, 6, 1 ]
    var numbers
    if( format ){
        numbers = parseTime( string, format )
    } else {
        numbers = parseTimeByDefaultFormats( string )
    }

    // Create Time by numbers
    return setTime( numbers )



    /**
     * Parse time from string by format
     * @param! { String } string - Such as '2015-6-1'
     * @param! { String } format - Such as '{y}-{m}-{d}'
     * @return { int[] } numbers - Such as [ 2015, 6, 1 ]
     * @return { null } - It means the string doesn't match the format
     */
    function parseTime( string, format ){
        var reg, numbers
        reg = parseFormat( format )
        numbers = reg.exec( string )
        if( numbers ){
            numbers.shift()
            return toInt( numbers )
        } else {
            return null
        }
    }


    /**
     * Parse time from string by default formats
     * @param! { String } string - Such as '2015-6-1'
     * @return { int[] } numbers - Such as [ 2015, 6, 1 ]
     * @return { null } - It means the string doesn't match the format
     */
    function parseTimeByDefaultFormats( string ){
        var len, i, format, numbers
        len = Default_Formats.length
        for( i = 0; i < len; i++ ){
            format = Default_Formats[i]
            numbers = parseTime( string, format )
            if( numbers ){
                return numbers
            }
        }
        return null
    }


    /**
     * Parse format to number reg-exp
     * @param! { String } format - Such as '{y}-{m}-{d}'
     * @return { RegExp }        - Such as /^(\d+)-(\d+)-(\d+)$/
     */
    function parseFormat( format ){
        marks = []
        var reg = format.replace( Mark_Reg, function( _, mark ){
            marks.push( mark )
            return '(\\d+)'
        })
        reg = '^' + reg + '$'
        return new RegExp( reg )
    }


    /**
     * Convert number type from String to int
     * @param! { String[] } numbers - Such as ['2015','6','1']
     * @return { int[] }    numbers - Such as [ 2015, 6, 1 ]
     */
    function toInt( numbers ){
        var len, i
        len = numbers.length
        for( i = 0; i < len; i++ ){
            numbers[i] = parseInt( numbers[i] )
        }
        return numbers
    }


    /**
     * @param! { int[] } numbers
     * @return { Time }
     */
    function setTime( numbers ){
        var len, i, mark, number
        var Param = {
            y: null, m: null, d: null,
            h: null, i: null, s: null, ms: null
        }

        // Set Param.x = n, if exist in marks
        len = marks.length
        for( i = 0; i < len; i++ ){
            mark = marks[i]
            number = numbers[i]
            Param[ mark ] = number
        }

        return new Time (
            Param.y, Param.m, Param.d,
            Param.h, Param.i, Param.s, Param.ms
        )
    }
}