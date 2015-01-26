<?php


    /* 开始缓存 */
    ob_start();
    echo 'hello world ~ !';  // 暂不发送



    /* HTTP头信息 */
    header('Location: assist/new.php');  // 跳转
    exit;                                // 停止之后的脚本




    /* Cookie */
    setcookie('name');         // name = null
    setcookie('name', 'kid');  // name = kid

    // 3600秒后到期，范围限制：bbs.web.com/user/
    setcookie('name', 'kid', time()+360000, '/user/', 'bbs.web.com');
    // 删除cookie（需提供相同范围限制）
    setcookie('name', null, time()-1, '/user/', 'bbs.web.com');

    $_COOKIE['name'];  // 读取（但赋值无效）




    /* Session */
    session_start();    // 无论作何操作，都必须先start

    $_SESSION['name'] = 'kid';  // 设置
    echo $_SESSION['name'];     // 读取
    unset($_SESSION['name']);   // 删除

    session_destroy();  // 销毁整个session


    // 处理缓存
    ob_end_flush();  // 发送
    ob_end_clean();  // 不发送



    // header、cookie、session等操作，都必须在未发送任何html文本（甚至空白）之前调用
    // php.ini的output_buffering可全局配置输出缓存
    // 默认在开发者模式下，打开输出缓存


?>
