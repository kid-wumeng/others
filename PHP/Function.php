<?php

    /*
     * 函数名不区分大小写
     * 支持参数默认值
     */

    func_1( 1 );

    function func_1( $x, $y = 5 ) {
        echo $x + $y;
    }




    /*
     * 函数内不能直接调用外部变量
     * 通过global修饰即可
     */

    $var = 1;
    func_2();

    function func_2() {
        global $var;
        echo $var;
    }




    /*
     * 想返回多个值时，可以借助数组
     * 调用方则依靠list接收返回值
     */

    list($a,$b,$c) = func_3();
    echo $a;  // 1
    echo $b;  // 2
    echo $c;  // 3

    function func_3() {
        return array(1,2,3);
    }

?>
