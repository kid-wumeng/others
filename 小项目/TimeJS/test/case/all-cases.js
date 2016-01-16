(function() {
  module('time');

  QUnit.test('add', function() {
    var stamp, time;
    time = new Time('2015-6-1 18:30:45.666');
    time.add('year');
    QUnit.strictEqual(time.year, 2016, 'year + 1');
    time.add('month');
    QUnit.strictEqual(time.month, 7, 'month + 1');
    time.add('day');
    QUnit.strictEqual(time.day, 2, 'day + 1');
    time.add('hour');
    QUnit.strictEqual(time.hour, 19, 'hour + 1');
    time.add('minute');
    QUnit.strictEqual(time.minute, 31, 'minute + 1');
    time.add('second');
    QUnit.strictEqual(time.second, 46, 'second + 1');
    time.add('ms');
    QUnit.strictEqual(time.ms, 667, 'ms + 1');
    stamp = time.stamp;
    time.add('stamp');
    QUnit.strictEqual(time.stamp, stamp + 1, 'stamp + 1');
    time = new Time('2015-6-1 18:30:45.666');
    time.add('year', 3);
    QUnit.strictEqual(time.year, 2018, 'year + 3');
    time.add('month', 3);
    QUnit.strictEqual(time.month, 9, 'month + 3');
    time.add('day', 3);
    QUnit.strictEqual(time.day, 4, 'day + 3');
    time.add('hour', 3);
    QUnit.strictEqual(time.hour, 21, 'hour + 3');
    time.add('minute', 3);
    QUnit.strictEqual(time.minute, 33, 'minute + 3');
    time.add('second', 3);
    QUnit.strictEqual(time.second, 48, 'second + 3');
    time.add('ms', 3);
    QUnit.strictEqual(time.ms, 669, 'ms + 3');
    stamp = time.stamp;
    time.add('stamp', 3);
    return QUnit.strictEqual(time.stamp, stamp + 3, 'stamp + 3');
  });

  QUnit.test('clone', function() {
    var flag, new_time, old_time;
    old_time = new Time('2015-6-1 18:30:45.666');
    new_time = old_time.clone();
    flag = new_time.year === 2015 && new_time.month === 6 && new_time.day === 1 && new_time.hour === 18 && new_time.minute === 30 && new_time.second === 45 && new_time.ms === 666 && old_time !== new_time;
    return QUnit.ok(flag);
  });

  QUnit.test('daysIn', function() {
    var time;
    time = new Time('2015-6');
    QUnit.strictEqual(time.daysIn('month'), 30);
    time = new Time('2015-7');
    QUnit.strictEqual(time.daysIn('month'), 31);
    time = new Time('2015-2');
    QUnit.strictEqual(time.daysIn('month'), 28);
    QUnit.strictEqual(time.daysIn('year'), 365);
    time = new Time('2016-2');
    QUnit.strictEqual(time.daysIn('month'), 29);
    return QUnit.strictEqual(time.daysIn('year'), 366);
  });

  QUnit.test('get', function() {
    var stamp, time;
    time = new Time('2015-6-1 18:30:45.666');
    QUnit.strictEqual(time.get('year'), 2015, 'year');
    QUnit.strictEqual(time.get('month'), 6, 'month');
    QUnit.strictEqual(time.get('day'), 1, 'day');
    QUnit.strictEqual(time.get('hour'), 18, 'hour');
    QUnit.strictEqual(time.get('hour12'), 6, 'hour12');
    QUnit.strictEqual(time.get('hour24'), 18, 'hour24');
    QUnit.strictEqual(time.get('minute'), 30, 'minute');
    QUnit.strictEqual(time.get('second'), 45, 'second');
    QUnit.strictEqual(time.get('ms'), 666, 'ms');
    stamp = time.date.getTime();
    return QUnit.strictEqual(time.get('stamp'), stamp, 'stamp');
  });

  QUnit.test('isAM', function() {
    var time;
    time = new Time;
    time.set('hour', 6);
    QUnit.ok(time.isAM() === true);
    time.set('hour', 12);
    QUnit.ok(time.isAM() === false);
    time.set('hour', 18);
    QUnit.ok(time.isAM() === false);
    time.set('hour', 24);
    return QUnit.ok(time.isAM() === true);
  });

  QUnit.test('isAfter', function() {
    var target_1, target_2, target_3, time;
    time = new Time('2015-6-12 18:30:45.666');
    target_1 = new Time('2015-6-12 18:30:45.665');
    target_2 = new Time('2015-6-12 18:30:45.666');
    target_3 = new Time('2015-6-12 18:30:45.667');
    QUnit.ok(time.isAfter(target_1) === true);
    QUnit.ok(time.isAfter(target_2) === false);
    QUnit.ok(time.isAfter(target_3) === false);
    QUnit.ok(time.isAfter('2015-6-12 18:30:45.665') === true);
    QUnit.ok(time.isAfter('2015-6-12 18:30:45.666') === false);
    return QUnit.ok(time.isAfter('2015-6-12 18:30:45.667') === false);
  });

  QUnit.test('isBefore', function() {
    var target_1, target_2, target_3, time;
    time = new Time('2015-6-12 18:30:45.666');
    target_1 = new Time('2015-6-12 18:30:45.665');
    target_2 = new Time('2015-6-12 18:30:45.666');
    target_3 = new Time('2015-6-12 18:30:45.667');
    QUnit.ok(time.isBefore(target_1) === false);
    QUnit.ok(time.isBefore(target_2) === false);
    QUnit.ok(time.isBefore(target_3) === true);
    QUnit.ok(time.isBefore('2015-6-12 18:30:45.665') === false);
    QUnit.ok(time.isBefore('2015-6-12 18:30:45.666') === false);
    return QUnit.ok(time.isBefore('2015-6-12 18:30:45.667') === true);
  });

  QUnit.test('isBetween', function() {
    var end, end_string, start, start_string, time;
    start_string = '2015-6-12 18:30:45.665';
    end_string = '2015-6-12 18:30:45.667';
    start = new Time(start_string);
    end = new Time(end_string);
    time = new Time('2015-6-12 18:30:45.666');
    QUnit.ok(time.isBetween(start, end) === true);
    QUnit.ok(time.isBetween(start_string, end_string) === true);
    time = new Time('2015-6-12 18:30:45.123');
    QUnit.ok(time.isBetween(start, end) === false);
    QUnit.ok(time.isBetween(start_string, end_string) === false);
    time = new Time('2015-6-12 18:30:45.999');
    QUnit.ok(time.isBetween(start, end) === false);
    return QUnit.ok(time.isBetween(start_string, end_string) === false);
  });

  QUnit.test('isEqual', function() {
    var target_1, target_2, target_3, time;
    time = new Time('2015-6-12 18:30:45.666');
    target_1 = new Time('2015-6-12 18:30:45.665');
    target_2 = new Time('2015-6-12 18:30:45.666');
    target_3 = new Time('2015-6-12 18:30:45.667');
    QUnit.ok(time.isEqual(target_1) === false);
    QUnit.ok(time.isEqual(target_2) === true);
    QUnit.ok(time.isEqual(target_3) === false);
    QUnit.ok(time.isEqual('2015-6-12 18:30:45.665') === false);
    QUnit.ok(time.isEqual('2015-6-12 18:30:45.666') === true);
    return QUnit.ok(time.isEqual('2015-6-12 18:30:45.667') === false);
  });

  QUnit.test('isLeapYear', function() {
    var time;
    time = new Time(2016);
    QUnit.ok(time.isLeapYear() === true);
    time = new Time(2000);
    QUnit.ok(time.isLeapYear() === true);
    time = new Time(2015);
    QUnit.ok(time.isLeapYear() === false);
    time = new Time(1900);
    return QUnit.ok(time.isLeapYear() === false);
  });

  QUnit.test('isPM', function() {
    var time;
    time = new Time;
    time.set('hour', 6);
    QUnit.ok(time.isPM() === false);
    time.set('hour', 12);
    QUnit.ok(time.isPM() === true);
    time.set('hour', 18);
    QUnit.ok(time.isPM() === true);
    time.set('hour', 24);
    return QUnit.ok(time.isPM() === false);
  });

  QUnit.test('new Time', function() {
    var date, flag, time;
    date = new Date(2015, 5, 1, 18, 30, 45, 666);
    time = new Time(date);
    flag = time.year === 2015 && time.month === 6 && time.day === 1 && time.hour === 18 && time.minute === 30 && time.second === 45 && time.ms === 666;
    QUnit.ok(flag);
    time = new Time(2015, 6, 1, 18, 30, 45, 666);
    flag = time.year === 2015 && time.month === 6 && time.day === 1 && time.hour === 18 && time.minute === 30 && time.second === 45 && time.ms === 666;
    QUnit.ok(flag);
    time = new Time(2015);
    flag = time.year === 2015 && time.month === 1 && time.day === 1 && time.hour === 0 && time.minute === 0 && time.second === 0 && time.ms === 0;
    QUnit.ok(flag);
    time = new Time(2015, null, null, 18, null, 45);
    flag = time.year === 2015 && time.month === 1 && time.day === 1 && time.hour === 18 && time.minute === 0 && time.second === 45 && time.ms === 0;
    QUnit.ok(flag);
    time = new Time('2015-6-1 18:30:45.666');
    flag = time.year === 2015 && time.month === 6 && time.day === 1 && time.hour === 18 && time.minute === 30 && time.second === 45 && time.ms === 666;
    QUnit.ok(flag);
    time = new Time('2015');
    flag = time.year === 2015 && time.month === 1 && time.day === 1 && time.hour === 0 && time.minute === 0 && time.second === 0 && time.ms === 0;
    QUnit.ok(flag);
    time = new Time('2015/6/1 03.06.09', '{y}/{m}/{d} {h}.{i}.{s}');
    flag = time.year === 2015 && time.month === 6 && time.day === 1 && time.hour === 3 && time.minute === 6 && time.second === 9 && time.ms === 0;
    return QUnit.ok(flag);
  });

  QUnit.test('set', function() {
    var time;
    time = new Time('2015-6-1 18:30:45.666');
    time.set('year', 2000);
    QUnit.strictEqual(time.year, 2000, 'year');
    time.set('month', 3);
    QUnit.strictEqual(time.month, 3, 'month');
    time.set('day', 12);
    QUnit.strictEqual(time.day, 12, 'day');
    time.set('hour', 6);
    QUnit.strictEqual(time.hour, 6, 'hour');
    time.set('minute', 10);
    QUnit.strictEqual(time.minute, 10, 'minute');
    time.set('second', 35);
    QUnit.strictEqual(time.second, 35, 'second');
    time.set('ms', 123);
    QUnit.strictEqual(time.ms, 123, 'ms');
    time.set('stamp', 1234567890);
    return QUnit.strictEqual(time.stamp, 1234567890, 'stamp');
  });

  QUnit.test('sub', function() {
    var stamp, time;
    time = new Time('2015-6-1 18:30:45.666');
    time.sub('year');
    QUnit.strictEqual(time.year, 2014, 'year - 1');
    time.sub('month');
    QUnit.strictEqual(time.month, 5, 'month - 1');
    time.sub('day');
    QUnit.strictEqual(time.day, 30, 'day - 1');
    time.sub('hour');
    QUnit.strictEqual(time.hour, 17, 'hour - 1');
    time.sub('minute');
    QUnit.strictEqual(time.minute, 29, 'minute - 1');
    time.sub('second');
    QUnit.strictEqual(time.second, 44, 'second - 1');
    time.sub('ms');
    QUnit.strictEqual(time.ms, 665, 'ms - 1');
    stamp = time.stamp;
    time.sub('stamp');
    QUnit.strictEqual(time.stamp, stamp - 1, 'stamp - 1');
    time = new Time('2015-6-1 18:30:45.666');
    time.sub('year', 3);
    QUnit.strictEqual(time.year, 2012, 'year - 3');
    time.sub('month', 3);
    QUnit.strictEqual(time.month, 3, 'month - 3');
    time.sub('day', 3);
    QUnit.strictEqual(time.day, 27, 'day - 3');
    time.sub('hour', 3);
    QUnit.strictEqual(time.hour, 15, 'hour - 3');
    time.sub('minute', 3);
    QUnit.strictEqual(time.minute, 27, 'minute - 3');
    time.sub('second', 3);
    QUnit.strictEqual(time.second, 42, 'second - 3');
    time.sub('ms', 3);
    QUnit.strictEqual(time.ms, 663, 'ms - 3');
    stamp = time.stamp;
    time.sub('stamp', 3);
    return QUnit.strictEqual(time.stamp, stamp - 3, 'stamp - 3');
  });

  QUnit.test('toString', function() {
    var time;
    time = new Time('2015-6-12 18:30:45.666');
    QUnit.strictEqual(time.toString(), '2015-06-12 18:30:45.666');
    QUnit.strictEqual(time.toString('{Y}-{m}-{d} {h24}:{i}:{s}.{ms}'), '2015-6-12 18:30:45.666');
    QUnit.strictEqual(time.toString('{Y}年{m}月{d}日 {h24}时{i}分{s}秒 {ms}毫秒'), '2015年6月12日 18时30分45秒 666毫秒');
    time = new Time('2015-6-6 6:6:6.6');
    QUnit.strictEqual(time.toString('{Y}'), '2015', 'Y');
    QUnit.strictEqual(time.toString('{M}'), '06', 'M');
    QUnit.strictEqual(time.toString('{D}'), '06', 'D');
    QUnit.strictEqual(time.toString('{H}'), '06', 'H');
    QUnit.strictEqual(time.toString('{H12}'), '06', 'H12');
    QUnit.strictEqual(time.toString('{H24}'), '06', 'H24');
    QUnit.strictEqual(time.toString('{I}'), '06', 'I');
    QUnit.strictEqual(time.toString('{S}'), '06', 'S');
    QUnit.strictEqual(time.toString('{MS}'), '006', 'MS');
    QUnit.strictEqual(time.toString('{y}'), '15', 'y');
    QUnit.strictEqual(time.toString('{m}'), '6', 'm');
    QUnit.strictEqual(time.toString('{d}'), '6', 'd');
    QUnit.strictEqual(time.toString('{h}'), '6', 'h');
    QUnit.strictEqual(time.toString('{h12}'), '6', 'h12');
    QUnit.strictEqual(time.toString('{h24}'), '6', 'h24');
    QUnit.strictEqual(time.toString('{i}'), '6', 'i');
    QUnit.strictEqual(time.toString('{s}'), '6', 's');
    QUnit.strictEqual(time.toString('{ms}'), '6', 'ms');
    time = new Time(2015, null, null, 18);
    QUnit.strictEqual(time.toString('{H}'), '18', 'hour18 - H');
    QUnit.strictEqual(time.toString('{H12}'), '06', 'hour18 - H12');
    QUnit.strictEqual(time.toString('{H24}'), '18', 'hour18 - H24');
    QUnit.strictEqual(time.toString('{h}'), '18', 'hour18 - h');
    QUnit.strictEqual(time.toString('{h12}'), '6', 'hour18 - h12');
    return QUnit.strictEqual(time.toString('{h24}'), '18', 'hour18 - h24');
  });

  module('duration');

  QUnit.test('get', function() {
    var duration, end, start;
    start = new Time(2015, 6, 1, 18, 30, 45, 666);
    end = new Time(2016, 7, 2, 19, 31, 46, 667);
    duration = new Duration(start, end);
    QUnit.strictEqual(duration.get('year'), 1, 'year');
    QUnit.strictEqual(duration.get('month'), 1, 'month');
    QUnit.strictEqual(duration.get('day'), 1, 'day');
    QUnit.strictEqual(duration.get('hour'), 1, 'hour');
    QUnit.strictEqual(duration.get('minute'), 1, 'minute');
    QUnit.strictEqual(duration.get('second'), 1, 'second');
    return QUnit.strictEqual(duration.get('ms'), 1, 'ms');
  });

  QUnit.test('getAll', function() {
    var d_Day, d_Hour, d_MS, d_Minute, d_Month, d_Second, d_Year, duration, end, start;
    start = new Time(2015, 6, 1, 18, 30, 45, 666);
    end = new Time(2016, 7, 2, 19, 31, 46, 667);
    duration = new Duration(start, end);
    d_Year = 1;
    d_Month = 13;
    d_Day = 366 + 30 + 1;
    d_Hour = d_Day * 24 + 1;
    d_Minute = d_Hour * 60 + 1;
    d_Second = d_Minute * 60 + 1;
    d_MS = d_Second * 1000 + 1;
    QUnit.strictEqual(duration.getAll('year'), d_Year, 'year');
    QUnit.strictEqual(duration.getAll('month'), d_Month, 'month');
    QUnit.strictEqual(duration.getAll('day'), d_Day, 'day');
    QUnit.strictEqual(duration.getAll('hour'), d_Hour, 'hour');
    QUnit.strictEqual(duration.getAll('minute'), d_Minute, 'minute');
    QUnit.strictEqual(duration.getAll('second'), d_Second, 'second');
    return QUnit.strictEqual(duration.getAll('ms'), d_MS, 'ms');
  });

  QUnit.test('new Duration', function() {
    var duration, end, flag, start;
    start = new Time(2015, 6, 1, 18, 30, 45, 666);
    end = new Time(2016, 7, 2, 19, 31, 46, 667);
    duration = new Duration(start, end);
    flag = duration.year === 1 && duration.month === 1 && duration.day === 1 && duration.hour === 1 && duration.minute === 1 && duration.second === 1 && duration.ms === 1;
    return QUnit.ok(flag);
  });

  QUnit.test('toString', function() {
    var d_Day, d_Hour, d_MS, d_Minute, d_Month, d_Second, d_Year, duration, end, start;
    start = new Time(2015, 6, 1, 18, 30, 45, 666);
    end = new Time(2016, 7, 2, 19, 31, 46, 667);
    duration = new Duration(start, end);
    d_Year = 1;
    d_Month = 13;
    d_Day = 366 + 30 + 1;
    d_Hour = d_Day * 24 + 1;
    d_Minute = d_Hour * 60 + 1;
    d_Second = d_Minute * 60 + 1;
    d_MS = d_Second * 1000 + 1;
    QUnit.strictEqual(duration.toString(), '01-01-01 01:01:01.001');
    QUnit.strictEqual(duration.toString('{y}年{m}月{d}日 {h}时{i}分{s}秒 {ms}毫秒'), '1年1月1日 1时1分1秒 1毫秒');
    QUnit.strictEqual(duration.toString('{Y}'), '01', 'Y');
    QUnit.strictEqual(duration.toString('{M}'), '01', 'M');
    QUnit.strictEqual(duration.toString('{D}'), '01', 'D');
    QUnit.strictEqual(duration.toString('{H}'), '01', 'H');
    QUnit.strictEqual(duration.toString('{I}'), '01', 'I');
    QUnit.strictEqual(duration.toString('{S}'), '01', 'S');
    QUnit.strictEqual(duration.toString('{MS}'), '001', 'MS');
    QUnit.strictEqual(duration.toString('{y}'), '1', 'y');
    QUnit.strictEqual(duration.toString('{m}'), '1', 'm');
    QUnit.strictEqual(duration.toString('{d}'), '1', 'd');
    QUnit.strictEqual(duration.toString('{h}'), '1', 'h');
    QUnit.strictEqual(duration.toString('{i}'), '1', 'i');
    QUnit.strictEqual(duration.toString('{s}'), '1', 's');
    QUnit.strictEqual(duration.toString('{ms}'), '1', 'ms');
    QUnit.strictEqual(duration.toString('{all.y}'), d_Year.toString(), 'all.y');
    QUnit.strictEqual(duration.toString('{all.m}'), d_Month.toString(), 'all.m');
    QUnit.strictEqual(duration.toString('{all.d}'), d_Day.toString(), 'all.d');
    QUnit.strictEqual(duration.toString('{all.h}'), d_Hour.toString(), 'all.h');
    QUnit.strictEqual(duration.toString('{all.i}'), d_Minute.toString(), 'all.i');
    QUnit.strictEqual(duration.toString('{all.s}'), d_Second.toString(), 'all.s');
    return QUnit.strictEqual(duration.toString('{all.ms}'), d_MS.toString(), 'all.ms');
  });

}).call(this);
