<?php

    $mongo = new MongoClient();
    $db = $mongo->test;
    $users = $db->users;


    // 增加文档
    $user = array(
        'name' => 'kid',
        'age' => 18,
        'hobbies' => array('动漫','游戏','音乐'),
        'pet' => array(
            'name' => 'moe',
            'age' => 3
        )
    );
    $db->users->insert($user);



    // 修改文档
    $where = array('name' => 'kid');
    $user['name'] = 'super-man';
    $options = array('$multiple' => true);  // 不知为何，php中这个批量更新的选项无效（mongodb shell中尝试是有效的）
    $db->users->update($where, $user, $options);



    // 删除文档
    $where = array('name' => 'kid');
    $db->users->remove($where);



    // 查询单个文档
    $user = $db->users->findOne();
    echo $user['_id'];
    echo $user['name'];



    // 查询多个文档
    $where = array('name' => 'kid');
    $users = $db->users->find($where);

    // 遍历方式一
    foreach($users as $id => $user){
        echo $id;
        echo $user['_id'];
        echo $user['name'];
    }

    // 遍历方式二
    while($users->hasNext()){
        $user = $users->next();
        echo $user['_id'];
        echo $user['name'];
    }

?>
