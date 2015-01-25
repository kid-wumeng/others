<?php


    // 连接字符串
    $name = 'kid';
    'I am ' . $name;



    // 单引号：绝对字面量
    // 双引号：会先计算变量、转义字符

    'I am $name';    // I am $name

    "I am $name";    // I am kid
    "I am ${name}";  // I am kid
    "I am {$name}";  // I am kid

    'hello \n world';  // hello \n world
    "hello \n world";  // hello world



    // 换行符 -> 换行标签（必须在双引号中）
    nl2br("hello \n world");         // hello <br /> world
    nl2br("hello \n world", false);  // hello <br> world


    // url编码
    urlencode('http://www.kid.me/index.php?name=kid&age=18');
    // url解码
    urldecode('http%3A%2F%2Fwww.kid.me%2Findex.php%3Fname%3Dkid%26age%3D18');


    strlen('kid');  // 求字符串长度：3
    strpos('kid.wumeng@gmail.com', 'gmail');  // 定位第一次出现的位置：11
    strstr('kid.wumeng@gmail.com', 'gmail');  // 提取子串：'gmail.com'
    substr('kid.wumeng@gmail.com', 4);        // 提取子串：wumeng@gmail.com
    substr('kid.wumeng@gmail.com', 4, 6);     // 提取子串：wumeng
    str_replace('b', '*', 'abc abc abc', $count);  // 替换子串：'a*c abc a*c'（$count = 3，替换了3个，可选）


    // 字符串 -> 数组
    explode(',', 'Comic,Music,Sport');     // array('Comic','Music','Sport')
    explode(',', 'Comic,Music,Sport', 2);  // array('Comic','Music,Sport')
    // 数组 -> 字符串
    implode(',', array('Comic','Music','Sport'));  // 'Comic,Music,Sport'
    join(',', array('Comic','Music','Sport'));     // 'Comic,Music,Sport'

?>
