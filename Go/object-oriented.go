package main

import (
    . "fmt"
)



type Coder interface {
    Program()
    Test(sth string)
}

type Animal struct {
    age int
}

// 相当于继承了Animal
// 由于实现了Coder接口的全部方法，所以自动实现了Coder接口
type Human struct {
    Animal
    name string
}

func (human Human) Program() {
    human.age = 0  // 值传递，原对象的age不会变
}

func (human *Human) Test() {
    human.age = 0  // 引用传递，原对象的age会变
}



func main() {

    human_1 := Human{ Animal{18}, "kid" }

    human_2 := Human{
        Animal: Animal{
            age: 20,
        },
        name: "kid",
    }

    // 属性、方法的访问权限与变量、函数一致
    // 首字母大写：public，可被其它包访问
    // 首字母小写：private，只能被本包访问
    human_2.Program()
    human_2.Test()

}
