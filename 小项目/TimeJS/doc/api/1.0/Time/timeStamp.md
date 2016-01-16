# timeStamp()
获取时间戳（从1970-1-1 0:0:0.000至指定时间点的毫秒数）

## 返回值
``int`` **timeStamp** - 时间戳

## 示例
例1

```javascript
new Time('1970-1-1').timeStamp()  // 0
```

例2

```javascript
new Time('2015-6-1 15:45').timeStamp()  // 1433173500000
```