package main

import (
    . "fmt"
)

func main() {


    // Go不支持「函数嵌套」「函数重载」「参数默认值」


    fn_1()


    _ = fn_2(1, 2)


    _ = fn_3(1, 2)


    _, _ = fn_4()


    fn_5("kid", 2, 3);


    a := 1
    fn_6( &a )


    fn_7( fn )


    fn_8( fn )


    // 匿名函数
    func() {
        Println("hello world ~ !")
    }()

}


// 无参数，无返回值
func fn_1() {
    Println("hello world ~ !");
}


// 有参数，有返回值
func fn_2( a int, b int ) int {
    return a + b;
}


// 同上，另一种返回值的方式
func fn_3( a int, b int ) (res int) {
    res = a + b
    return
}


// 多返回值
func fn_4() (int, int) {
    return 1, 2
}


// 变参
func fn_5( a string, arg ...int ) {
    Println(a)
    Println(arg)  //  [ a, b, c, ... ]
}


// 传递指针
func fn_6( a *int ) {
    *a = 5
}


// 函数作为参数
func fn_7( fn func(int)bool ) {
    fn(1)
}


// 同上，传入的是函数别名
func fn_8( fn fn_type ) {
    fn(1)
}


func fn( a int ) bool {
    Println("函数作为参数")
    return true
}
type fn_type func(int)bool
