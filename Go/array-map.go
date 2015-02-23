package main

import (
	. "fmt"
)

func main() {

	var array_1 = [5]int { 1, 2, 3 }  // [ 1, 2, 3, 0, 0 ]
	array_2 := [5]int { 1, 2, 3 }     // 同上
	array_3 := [...]int { 1, 2, 3 }
	array_4 := [2][3]int {
		{1, 2, 3}, {1, 2, 3},         // 要么}放这行，要么不省略这个逗号，否则报错
	}

	slice_1 := []int{1, 2, 3}
	slice_2 := array_1[1:4]  // [ 2, 3, 0 ]
	slice_3 := array_1[:4]   // 等价于[0:4]
	slice_4 := array_1[1:]   // 等价于[1:len(arr_1)]
	slice_5 := array_1[:]    // 等价于[0:len(arr_1)]
	slice_6 := append(slice_1, 4, 5)  // [ 1, 2, 3, 4, 5 ]

	array_1[0]  // 1
	slice_2[0]  // 2

	// 遍历array（slice也一样）
	// _的位置可以换成索引变量
	for _, value := range array_1 {
		Println(value)
	}

	len(array_1)  // 5
	len(slice_2)  // 3
	cap(slice_2)  // 4（slice_2相对于arr_1的截断处开始，到arr_1的最大位置，可以理解为能向后扩展的上限）

	copy( slice_1, []int{4, 5} )  // 2（复制了几个元素）-
	slice_1  					  // [4, 5, 3]（4，5覆盖了之前的1，2）



	var map_1 = make(map[string]int)
	map_1["one"] = 1

	map_2 := map[string]int{}
	map_2["one"] = 1

	map_3 := map[string]interface{} {
		"name": "kid",
		"age": 12,
		"hobbies": []string {"Comic", "Game", "Music"},  // 要么}放这行，要么不省略这个逗号，否则报错
	}

	for key, value := range map_3 {
		Println(key)
		Println(value)
	}




	a := array_1  // 值
	s := slice_1  // 引用
	m := map_1    // 引用

}
