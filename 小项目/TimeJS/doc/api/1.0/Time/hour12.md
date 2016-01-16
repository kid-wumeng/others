# hour24()
获取12进制小时数

## 返回值
``int`` **hour12** - 12进制小时数

## 示例
例1

```javascript
var time = Time.initObject({
    hour: 6
})
time.hour12()  // 6
```

例2

```javascript
var time = Time.initObject({
    hour: 18
})
time.hour12()  // 6
```