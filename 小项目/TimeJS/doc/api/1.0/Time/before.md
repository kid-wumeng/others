# before( targetTime )
当前时间点是否在``targetTime``时间点之前

## 参数
``Time`` **targetTime** - 目标时间

## 返回值
``bool`` **result** - 是或不是在``targetTime``之前

## 示例
例1

```javascript
var time1 = new Time('2015-6-12 18:30:45.666')
var time2 = new Time('2015-6-12 18:30:45.667')
time1.before( time2 )  // true
```

例2

```javascript
var time1 = new Time('2015-6-12 18:30:45.666')
var time2 = new Time('2015-6-12 18:30:45.666')
time1.before( time2 )  // false
```

例3

```javascript
var time1 = new Time('2015-6-12 18:30:45.666')
var time2 = new Time('2015-6-12 18:30:45.665')
time1.before( time2 )  // false
```