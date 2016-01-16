# Time.initObject( timeString, timeFormat )
初始化一个时间点

## 参数
* ``String`` **timeString** - 时间字符串，比如```2015-6-1```
* ``String`` **timeFormat** - 时间格式，比如```{y}-{m}-{d}```
    
时间标记以花括号包裹，当前支持的标记：

标记 | 对应数字的例子 | 说明 | 默认值
--- | --- | --- | ---
y | 2015 | 四位完整年份 | 当前年份
m | 1、01 | 月份，以1~12表示 | 1
d | 1、01 | 日期 | 1
h | 1、01 | 24进制小时数 | 0
i | 1、01 | 分钟数 | 0
s | 1、01 | 秒数 | 0
ms | 1、01、001 | 毫秒数 | 0

    Note1 - 若不传timeFormat，则默认为{y}-{m}-{d} {h}-{i}-{s}.{ms}。还可以缺少后面的一部分，比如{y}-{m}，此时没写的部分设为默认值。
    
    Note2 - 如果连timeString也没传，则默认为当年的1月1日0时0分0秒0毫秒。

## 返回值
``Time`` **time** - 创建的时间点

## 示例
例1 - 生成「2015年6月12日18时30分45秒666毫秒」这个时间点

```javascript
var time = Time.initString('2015-6-12 18:30:45.666')
```

例2 - 生成「2015年3月第一天的早上6点整」这个时间点

```javascript
var time = Time.initString('2015-3-6')
```

例3 - 生成「当年第一天的零点整」这个时间点

```javascript
var time = Time.initString()
```

例4 - 生成「2015年6月12日18点整」这个时间点，而且传入的字符串有一定格式要求

```javascript
var time = Time.initString('18 at 6/12/2015','{h} at {m}/{d}/{y}')
```

例5 - 生成「2015年6月12日18点整」这个时间点，而且传入的字符串有一定格式要求

```javascript
var time = Time.initString('2015年6月12日：18点','{y}年{m}月{d}日：{h}点')
```