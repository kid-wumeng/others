package main

import (
    "os"
    . "fmt"
)

func main() {

    // 打开文件
    // 第三个参数是unix中的权限
    // 只读可以用os.Open("d:/test/abc.json")
    file, _ := os.OpenFile("d:/test/abc.json", os.O_CREATE, os.ModePerm)
    defer file.Close()

    // 读文件
    buf := make([]byte, 1024)
    for {
        n, _ := file.Read(buf);
        if n == 0 { break }
        Println(string( buf[:n] ))
    }

    // 写文件
    file.WriteString("wumeng")

}

