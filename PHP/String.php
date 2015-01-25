<?php

    // 连接字符串
    $name = 'kid';
    'I am ' . $name;


    /*
     * 单引号：绝对字面量
     * 双引号：会先计算变量、转义字符
     */

    'I am $name';    // I am $name
    "I am $name";    // I am kid
    "I am ${name}";  // I am kid
    "I am {$name}";  // I am kid

    'hello \n world';  // hello \n world
    "hello \n world";  // hello world

    nl2br("hello \n world");         // hello <br /> world
    nl2br("hello \n world", false);  // hello <br> world


    urlencode('http://www.kid.me/index.php?name=kid&age=18');                  // url编码
    urldecode('http%3A%2F%2Fwww.kid.me%2Findex.php%3Fname%3Dkid%26age%3D18');  // url解码

?>
