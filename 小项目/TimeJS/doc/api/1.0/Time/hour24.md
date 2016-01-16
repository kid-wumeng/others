# hour24()
获取24进制小时数

## 返回值
``int`` **hour24** - 24进制小时数

## 示例
例1

```javascript
var time = Time.initObject({
    hour: 6
})
time.hour24()  // 6
```

例2

```javascript
var time = Time.initObject({
    hour: 18
})
time.hour24()  // 18
```