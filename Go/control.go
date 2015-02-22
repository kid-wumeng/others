package main

import (
	. "fmt"
)

func main() {

	a := 5
	if a < 0 {
		Println("负数")  // 即使只有一条语句，也必须有花括号
	} else if a > 0 {
		Println("正数")
	} else {
		Println(0)
	}



	if b := a - 1; b > 0 {
		Println(b)  // b只在if内有效，出了if就释放了
	}



	c := 1
	switch c + 1 {
		case 1:
			Println("A")
		case 2, 3, 4:
			Println("B")
		default:
			Println("C")
	}



	for i := 0; i < 10; i++ {
		Println(i)  // 同上，i出了for就无效了
		if i == 5 {
			break;  // 也支持continue
		}
	}



	// 相当于where
	i := 0
	for i < 10 {
		Println(i)
		i++
	}



	i = 0
	Label:
		Println(i)
		i++
		if( i != 5 ) {
			goto Label  // 只能跳到当前函数内定义的标签
		}
}
