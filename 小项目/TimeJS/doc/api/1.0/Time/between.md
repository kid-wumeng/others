# between( startTime, endTime )
当前时间点是否在``startTime``与``endTime``时间点之间

## 参数
``Time`` **startTime** - 起始时间
``Time`` **endTime** - 终止时间

## 返回值
``bool`` **result** - 是或不是在``startTime``与``endTime``之间

## 示例
例1

```javascript
var start, time, end
start = new Time('2015-6-12 18:30:45.665')
time  = new Time('2015-6-12 18:30:45.666')
end   = new Time('2015-6-12 18:30:45.667')
time.between(start,end)  // true
```

例2

```javascript
var start, time, end
start = new Time('2015-6-12 18:30:45.665')
time  = new Time('2015-6-12 18:30:45.123')
end   = new Time('2015-6-12 18:30:45.667')
time.between(start,end)  // false
```

例3

```javascript
var start, time, end
start = new Time('2015-6-12 18:30:45.665')
time  = new Time('2015-6-12 18:30:45.665')
end   = new Time('2015-6-12 18:30:45.667')
time.between(start,end)  // false
```