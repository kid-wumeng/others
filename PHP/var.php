<?php

    // 变量
    $abc = 1;

    // 常量
    define('ABC', 1);

    // 输出参数（性能高，可多值）
    echo 1,2,3;

    // 输出参数（仅单值，但可用于复杂表达式）
    print 1;
    $abc ? print 'true' : print 'false';

    // 输出参数类型
    var_dump(1);

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
    $bool = true;
    $bool = false;
    // true与false不区分大小写
    // 输出到页面时，true转换为1，false不会输出
    // 以下数值转换为布尔型时，会被识别为false： 0 | 0.0 | '' | '0' | null | 空数组

?>