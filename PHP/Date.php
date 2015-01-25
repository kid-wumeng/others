<?php

    /*
     * 常用的时间格式：
     *
     * Y - 年份：2015
     * y - 年份：  15
     *
     * m - 月份：01
     * n - 月份： 1
     *
     * d - 日期：01
     * j - 日期： 1
     *
     * h - 12进制小时：06
     * g - 12进制小时： 6
     *
     * H - 24进制小时：06 / 18
     * G - 24进制小时： 6 / 18
     *
     * i - 分钟：45
     *
     * s - 秒：25
     *
     * A - 上 / 下午：AM / PM
     * a - 上 / 下午：am / pm
     *
     * U - epoch（Unix时间戳）：1048623008
     *
     * e - 时区：UTC
     *
     * 详细格式表：http://www.phpstudy.net/php/331.html
     * 合法时区表：http://php.net/manual/en/timezones.php
     */


    // 设置时区
    date_default_timezone_set('Asia/Shanghai');
    // 获取时区
    date_default_timezone_get();


    date('Y-m-d H:i:s');              // 当前时间
    date('Y-m-d H:i:s', 1422106832);  // UNIX时间戳（第二个参数）指定的时间


    time();                     // 当前时间戳
    mktime(12,30,0,11,5,2009);  // 指定的时间戳，参数：时，分，秒，月（1~12），日，年


    /* 根据一定格式获取时间戳 */

    strtotime('2015-01-25');
    strtotime('2015-01-25 08:05:25');
    strtotime('2015-1-25 8:5:25');

    strtotime('+3 year');
    strtotime('+3 month');
    strtotime('+3 day');
    strtotime('+3 hour');
    strtotime('+3 minute');
    strtotime('+3 second');
    strtotime('+3 week');

    strtotime('-3 year');

    strtotime('+3 years');
    strtotime('-3 years');

?>
