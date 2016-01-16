## 原型
 ``time.get( attribute )``

获取``time``的某个属性

参数 | 取值范围 | 说明
attribute | ``'year'`` / ``'month'`` / ``'day'`` / ``'hour'`` / ``'hour12'`` / ``'hour24'`` / ``'minute'`` / ``'second'`` / ``'ms'`` | 属性名

value | { int } | 时间值

## 示例
1. 取年份
```javascript
var time = new Time('2015-6-1 18:30:45.666')
var year = time.get('year')
console.log( year )  // 2015
```

2. 取12进制小时数
```javascript
var time = new Time('2015-6-1 18:30:45.666')
var hour12 = time.get('hour12')
console.log( hour12 )  // 6
```
