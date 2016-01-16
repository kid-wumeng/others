# isAM()
时间点是否为下午

## 返回值
``bool`` **result** - 是或不是下午

    Note - 12:0:0.000 ~ 23:59:59.999 算下午

## 示例
例1

```javascript
var time = Time.initObject({
    hour: 6
})
time.isPM()  // false
```

例2

```javascript
var time = Time.initObject({
    hour: 15
})
time.isPM()  // true
```

例3

```javascript
var time = Time.initObject({
    hour: 0
})
time.isPM()  // false
```

例4

```javascript
var time = Time.initObject({
    hour: 12
})
time.isPM()  // true
```