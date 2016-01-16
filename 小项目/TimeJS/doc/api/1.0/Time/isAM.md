# isAM()
时间点是否为上午

## 返回值
``bool`` **result** - 是或不是上午

    Note - 0:0:0.000 ~ 11:59:59.999 算上午

## 示例
例1

```javascript
var time = Time.initObject({
    hour: 6
})
time.isAM()  // true
```

例2

```javascript
var time = Time.initObject({
    hour: 15
})
time.isAM()  // false
```

例3

```javascript
var time = Time.initObject({
    hour: 0
})
time.isAM()  // true
```

例4

```javascript
var time = Time.initObject({
    hour: 12
})
time.isAM()  // false
```