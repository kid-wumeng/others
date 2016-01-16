<?php

    $arr_1 = array(1,2,3);


    $arr_2 = array(
        'name' => 'kid',
        'age' => 18,
        'hobbies' => array('Comic','Music','Sport')
    );


    print_r($arr_2);   // 打印数组
    count($arr_2);     // 求数组长度：3


    // 遍历：仅获取值
    foreach ($arr_1 as $val) {
        /* ... */
    }


    // 遍历：获取键值对
    foreach ($arr_2 as $key => $val) {
        /* ... */
    }



    // 数组运算
    $arr_1 + $arr_2;  // 合并数组，若key/index重复，则只保留第一个数组的
    array(1,2) == array(1,'2');   // true
    array(1,2) === array(1,'2');  // false，必须key/index/type全等
    array(1,2) != array(1,'2');   // false
    array(1,2) <> array(1,'2');   // false（等价于!=）
    array(1,2) !== array(1,'2');  // false



    echo '<br>------------------------------<br>';
        var_dump(array(1,2) <> array(1,'2'));
    echo '<br>------------------------------<br>';


    // 判断是否存在
    in_array(18, $arr_2);    // true
    in_array('18', $arr_2);  // true
    in_array('18', $arr_2, true);  // false（类型也检查）


    // 去重（返回新数组）
    array_unique( array(1,2,3,true,'1') );  // [1,2,3]


    // 反转（返回新数组）
    array_reverse($arr_2);


    // 打乱
    shuffle($arr_1);


    // 求和（仅算整型）
    array_sum($arr_1);  // 6
    array_sum($arr_2);  // 18


    // [1,2,3] -> [1,2,3,4,5]
    array_push($arr_1,4,5);
    // [1,2,3] -> [1,2]（返回3）
    array_pop($arr_1);


    // [1,2,3] -> [2,3]（返回1）
    array_shift($arr_1);
    // [1,2,3] -> [-1,0,1,2,3]
    array_unshift($arr_1, -1, 0);


    // 排序
    sort($arr_2);    // 依据：val（key->index）
    rsort($arr_2);   // 依据：val（key->index）

    asort($arr_2);   // 依据：val（保持key/value）
    arsort($arr_2);  // 依据：val（保持key/value）

    ksort($arr_2);   // 依据：key（保持key/value）
    krsort($arr_2);  // 依据：key（保持key/value）


?>
