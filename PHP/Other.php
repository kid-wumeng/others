<?php

    // 引入文件，若遇到BUG，仍执行之后的脚本
    include 'assist/header.html';

    // 引入文件，若遇到BUG，不执行之后的脚本
    require 'assist/header.html';

    // 同一文件，重复引用只算一次
    include_once 'assist/header.html';
    require_once 'assist/header.html';

?>
