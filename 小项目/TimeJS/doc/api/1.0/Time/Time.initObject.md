# Time.initObject( options )
初始化一个时间点

## 参数
* ``{}`` **options**
    * ``int`` **year**
    * ``int`` **month**
    * ``int`` **day**
    * ``int`` **hour**
    * ``int`` **minute**
    * ``int`` **second**
    * ``int`` **milliSecond**

**options** - 可配置选项，若未传递本对象，则所有选项采用默认值：

选项 | 默认值 | 说明
--- | --- | ---
year | 当前年份 | 四位完整年份
month | 1 | 月份，以1~12表示
day | 1 | 日期
hour | 0 | 24进制小时数
minute | 0 | 分钟数
second | 0 | 秒数
milliSecond | 0 | 毫秒数

## 返回值
``Time`` **time** - 创建的时间点

## 示例
例1 - 生成「2015年6月12日18时30分45秒666毫秒」这个时间点

```javascript
var time = Time.initObject({
	year:  2015,
	month: 6,
	day:   12,
	hour:   18,
	minute: 30,
	second: 45,
	milliSecond: 666
})
```

例2 - 生成「2015年3月第一天的早上6点整」这个时间点

```javascript
var time = Time.initObject({
	year:  2015,
	month: 3,
	hour:  6
})
```

例3 - 生成「当年第一天的零点整」这个时间点

```javascript
var time = Time.initObject()
```