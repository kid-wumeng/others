package main


import (
	io "fmt"  // io作为fmt的别名
)


var a int = 1  // private，只能被本包（包括本包其它文件）访问
var A int = 1  // public，可被外部包访问
var b = 2      // 自动类型推导


/* 变量 */
var (
	var_1  bool = true  // 默认：false
	var_2  int
	var_3  int8
	var_4  int16
	var_5  int32
	var_6  int64
	var_7  rune  // 等同于int32
	var_8  uint
	var_9  uint8
	var_10 uint16
	var_11 uint32
	var_12 uint64
	var_13 uintptr  // 一个指针值的大小
	var_14 byte     // 等同于uint8
	var_15 float32
	var_16 float64
	var_17 complex64   // 由float32类型的实部和虚部所组成的复数
	var_18 complex128  // 由float64类型的实部和虚部所组成的复数
	var_19 string
)


/* 常量 */
const (
	PI = 3.14
	E  = 2.71
)


/* 枚举 */
const (
	Sunday = iota  // 0
	Monday     	   // 1
	Tuesday        // 2
	Wednesday      // 3
	Thursday       // 4
	Friday         // 5
	Saturday       // 6
)


// 每个项目必须存在main函数，但只能有一个，且位于主包
// 每个包（包括主包）都可以有init函数，也可以没有，当其所在包被初始化时调用
func main() {
	a := 3  // 自动类型推导，只能用于函数内，这里覆盖全局a
	a, b, c := 1, 2, 3

	io.Println(a, b, c)  // "1 2 3"
	io.Printf("num = %d, %d, %d \n", a, b, c)
	io.Println("hello " + "world ~ !")
}