<?php

    // 判断是否匹配（匹配到一个就不继续了）
    $regExp = '/Windows (\w+)/';
    $string = 'There is Windows XP';
    preg_match($regExp, $string);            // 匹配成功：1 | 失败：0
    preg_match($regExp, $string, $matches);  // 匹配成功：1 | 失败：0
    $matches[0];  // Windows XP
    $matches[1];  // XP


    // 判断是否匹配（匹配全部）
    $regExp = '/Windows (\w+)/';
    $string = 'There is Windows XP and Windows 7';
    preg_match_all($regExp, $string);            // 匹配成功：匹配到的数量 | 失败：0
    preg_match_all($regExp, $string, $matches);  // 匹配成功：1 | 失败：0
    $matches[0][0];  // 'Windows XP'
    $matches[0][1];  // 'Windows 7'
    $matches[1][0];  // 'XP'
    $matches[1][1];  // '7'


    // 替换
    $regExp = '/Windows (\w+)/';
    $old = 'There is Windows XP and Windows 7';
    $replace = '${1}';
    preg_replace($regExp, $replace, $old);  // 'There is XP and 7'


    // 分割
    $regExp = '/\s+/';
    $string_1 = 'Comic Game \n Music';
    $string_2 = "Comic Game \n Music";
    preg_split($regExp, $string_1);  // ['Comic', 'Game', '\n', 'Music']
    preg_split($regExp, $string_2);  // ['Comic', 'Game', 'Music']


    // 提取匹配的数组元素
    $regExp = '/^\w{3}$/';
    $array = array('cat', 'tiger', 'dog', 'rabbit');
    preg_grep($regExp, $array);  // ['cat', 'dog']

?>
