GET方式：
<form method="GET">
    姓名：
        <input type="text" name="name"/>
    爱好：
        <input type="checkbox" name="hobbies[]" value="动漫"/>动漫
        <input type="checkbox" name="hobbies[]" value="游戏"/>游戏
        <input type="checkbox" name="hobbies[]" value="音乐"/>音乐
        <input type="checkbox" name="hobbies[]" value="电影"/>电影
        <input type="checkbox" name="hobbies[]" value="运动"/>运动

    <input type="submit" value="提交"/>
</form>


POST方式：
<form method="POST">
    姓名：
    <input type="text" name="name"/>
    爱好：
    <input type="checkbox" name="hobbies[]" value="动漫"/>动漫
    <input type="checkbox" name="hobbies[]" value="游戏"/>游戏
    <input type="checkbox" name="hobbies[]" value="音乐"/>音乐
    <input type="checkbox" name="hobbies[]" value="电影"/>电影
    <input type="checkbox" name="hobbies[]" value="运动"/>运动

    <input type="submit" value="提交"/>
</form>


<a href="?name=kid&hobbies[]=动漫&hobbies[]=音乐">url链接（相当于GET方式）</a>
<br/>
<br/>


<?php

    switch ( $_SERVER['REQUEST_METHOD'] ) {
        case 'GET':
            print_r( $_GET );
            break;
        case 'POST':
            print_r( $_POST );
            break;
    }

    echo '<br/>';

    print_r( $_REQUEST );

?>
