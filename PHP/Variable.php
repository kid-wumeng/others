<?php

    // 变量
    $abc = 1;
    // 常量
    define('ABC', 1);
    /* 名字都区分大小写 */


    // 输出参数（性能高，可多值）
    echo 1,2,3;
    // 输出参数（仅单值，但可用于复杂表达式）
    print 1;
    $abc ? print 'true' : print 'false';


    // 判断变量是否已存在（同时必须不为null）
    isset($abc);
    // 释放变量
    unset($abc);


    // 整型
    $int = 1;
    $int = 01;    // 八进制
    $int = 0x01;  // 十六进制


    // 浮点型
    $float = 1.5;
    $float = 1.5e3;   // = 1500
    $float = 1.5e-3;  // = 0.0015


    // 布尔型
    // true与false不区分大小写
    // 输出到页面时，true转换为1，false不会输出
    // 以下数值转换为布尔型时，会被识别为false：
    //    0 | 0.0 | '' | '0' | null | 空数组
    $bool = true;
    $bool = false;


    // 未赋值、unset后的变量为null
    // 字符串 -> String.php
    // 数组 -> Array


    // 输出参数类型
    gettype(1);             // integer
    gettype(1.5);           // double
    gettype(true);          // boolean
    gettype('abc');         // string
    gettype(array(1,2,3));  // array
    gettype(null);          // NULL


    // 判断参数类型
    is_int(1);
    is_double(1.5);
    is_bool(true);
    is_string('abc');
    is_array(array(1,2,3));
    is_null(null);


    // 输出参数类型、真实值
    var_dump(1);

?>
