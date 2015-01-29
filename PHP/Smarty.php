<?php

    require_once 'assist/smarty/libs/Smarty.class.php';


    $smarty = new Smarty();

    // 是否显示Debug控制台
    $smarty->debugging = false;

    $smarty->setTemplateDir('assist/view/');
    $smarty->setCompileDir('assist/smarty/templates_c/');
    $smarty->setConfigDir('assist/smarty/configs/');
    $smarty->setCacheDir('assist/smarty/cache/');


    $smarty->assign('name', 'kid');
    $smarty->assign('array_1', array(1,2,3));
    $smarty->assign('array_2', array('name'=>'kid','age'=>18));
    $smarty->assign('array_3', array(
        array('name'=>'张三', 'age'=>18),
        array('name'=>'李四', 'age'=>19),
        array('name'=>'王五', 'age'=>20)
    ));


    $smarty->display('smarty.html');

?>
