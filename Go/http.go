package main

import (
    . "fmt"
    "net/http"
    "net/url"
    "io/ioutil"
)

func main() {

    var (
        resp *http.Response
        body []byte
    )


    // HTTP Client ( GET )
    resp, _ = http.Get("http://www.baidu.com/")
    defer resp.Body.Close()
    body, _ = ioutil.ReadAll(resp.Body)



    // HTTP Client ( POST )
    resp, _ = http.PostForm(
        "http://www.baidu.com/",
        url.Values{
            "name": {"kid"},
            "age": {"18"},
        },
    )
    defer resp.Body.Close()
    body, _ = ioutil.ReadAll(resp.Body)
    Println(string(body))



    // HTTP Server
    http.HandleFunc("/", func( resp http.ResponseWriter, req *http.Request ){
        // "GET", "POST" ...
        Println(req.Method)
        Println(req.URL.Path)

        // 获取请求参数，一定要先解析
        // 每个参数值都是数组
        req.ParseForm()
        if len(req.Form["name"]) > 0 {
            Println( req.Form["name"][0] )
        }
        if len(req.Form["age"]) > 0 {
            Println( req.Form["age"][0] )
        }

        // 响应体
        resp.Write([]byte("hi"))
    })

    http.HandleFunc("/user/", func( resp http.ResponseWriter, req *http.Request ){
        Println( req.URL )       // 例如：/user/login?name=kid
        Println( req.URL.Path )  // 例如：/user/login
    })

    http.ListenAndServe(":80", nil)

}

