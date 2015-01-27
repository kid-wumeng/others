<?php

    class ParentClass
    {
        public $var_1;  // public可换成var
        protected $var_2;
        private $var_3;

        // public可不加
        public static $var_static;

        // 构造
        function __construct(){
            $this->var_1;       // 访问实例成员
            self::$var_static;  // 访问静态成员
        }

        // 析构
        function __destruct(){}

        public function func_1(){}              // public可不加
        protected function func_2(){}
        private function func_3(){}
        public static function func_static(){}  // public可不加

    }


    class ChildClass extends ParentClass {
        public $var_1 = 'child';
    }


    // 访问静态成员
    ParentClass::$var_static;
    ParentClass::func_static();


    $child = new ChildClass();
    $child->var_1;  // 'child'

?>
