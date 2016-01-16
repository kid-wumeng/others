package main

import (
    . "fmt"  // 可直接使用fmt中的函数，而无需包前缀
)

func main() {

    var a int

    a = 5 + 2
    a = 5 - 2
    a = 5 * 2
    a = 5 / 2    // 2 ( 5.0 / 2 = 2.5 )
    a = 5 % 2    // 1

    a += 1
    a -= 1
    a *= 1
    a /= 1
    a %= 1

    a++  // 无++a
    a--  // 无--a

    Println( 1 == 1  )   // true
    Println( 1 == '1' )  // false
    Println( 1 != 1 )    // false
    Println( 1 != '1' )  // true
    Println( 1 < 2 )     // true
    Println( 1 <= 2 )    // true
    Println( 1 > 2 )     // false
    Println( 1 >= 2 )    // false

    // 定义类型别名
    type number float32
    var b number = 1.5
    Println( b )
}
