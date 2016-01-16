# equal( targetTime )
当前时间点是否与``targetTime``时间点为同一个时间点

    Note - 这里并非指是否为同一个对象（或有相同的引用），而是比较时间戳，只要时间戳相等，就认为是同一个时间点。

## 参数
``Time`` **targetTime** - 目标时间

## 返回值
``bool`` **result** - 是或不是与``targetTime``为同一个时间点

## 示例
例1

```javascript
var time1 = new Time('2015-6-12 18:30:45.666')
var time2 = new Time('2015-6-12 18:30:45.666')
time1.equal( time2 )  // true
```

例2

```javascript
var time1 = new Time('2015-6-12 18:30:45.666')
var time2 = new Time('2015-6-12 18:30:45.667')
r = time1.equal( time2 )  // false
```