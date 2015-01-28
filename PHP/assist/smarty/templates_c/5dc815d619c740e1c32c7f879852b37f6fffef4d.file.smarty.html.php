<?php /* Smarty version Smarty-3.1.21-dev, created on 2015-01-28 15:23:15
         compiled from "assist\view\smarty.html" */ ?>
<?php /*%%SmartyHeaderCode:3183054c8baf62fcc84-81477156%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '5dc815d619c740e1c32c7f879852b37f6fffef4d' => 
    array (
      0 => 'assist\\view\\smarty.html',
      1 => 1422458590,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3183054c8baf62fcc84-81477156',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_54c8baf635e722_98377536',
  'variables' => 
  array (
    'name' => 0,
    'array_1' => 0,
    'val' => 0,
    'array_2' => 0,
    'key' => 0,
    'array_3' => 0,
    'man' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54c8baf635e722_98377536')) {function content_54c8baf635e722_98377536($_smarty_tpl) {?><!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Smarty Template</title>
</head>
<body>

    <h1>hello <?php echo $_smarty_tpl->tpl_vars['name']->value;?>
 ~ !</h1>

    <ul>
    <?php  $_smarty_tpl->tpl_vars['val'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['val']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['array_1']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['val']->key => $_smarty_tpl->tpl_vars['val']->value) {
$_smarty_tpl->tpl_vars['val']->_loop = true;
?>
        <li><?php echo $_smarty_tpl->tpl_vars['val']->value;?>
</li>
    <?php } ?>
    </ul>

    <ul>
    <?php  $_smarty_tpl->tpl_vars['val'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['val']->_loop = false;
 $_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['array_2']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['val']->key => $_smarty_tpl->tpl_vars['val']->value) {
$_smarty_tpl->tpl_vars['val']->_loop = true;
 $_smarty_tpl->tpl_vars['key']->value = $_smarty_tpl->tpl_vars['val']->key;
?>
        <li><?php echo $_smarty_tpl->tpl_vars['key']->value;?>
 ： <?php echo $_smarty_tpl->tpl_vars['val']->value;?>
</li>
    <?php } ?>
    </ul>

    <ul>
    <?php  $_smarty_tpl->tpl_vars['man'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['man']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['array_3']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['man']->key => $_smarty_tpl->tpl_vars['man']->value) {
$_smarty_tpl->tpl_vars['man']->_loop = true;
?>
        <li><?php echo $_smarty_tpl->tpl_vars['man']->value['name'];?>
（<?php echo $_smarty_tpl->tpl_vars['man']->value['age'];?>
岁）</li>
    <?php } ?>
    </ul>

</body>
</html>
<?php }} ?>
