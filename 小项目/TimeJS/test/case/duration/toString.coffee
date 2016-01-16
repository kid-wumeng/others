QUnit.test 'toString', ->

    start = new Time 2015, 6, 1, 18, 30, 45, 666
    end   = new Time 2016, 7, 2, 19, 31, 46, 667
    duration = new Duration( start, end )


    d_Year   = 1
    d_Month  = 13
    # 2016 is a leap year
    # 2016-6 has 30 days
    d_Day    = 366 + 30 + 1
    d_Hour   = d_Day * 24 + 1
    d_Minute = d_Hour * 60 + 1
    d_Second = d_Minute * 60 + 1
    d_MS     = d_Second * 1000 + 1


    # 1
    QUnit.strictEqual duration.toString(), '01-01-01 01:01:01.001'
    # 2
    QUnit.strictEqual duration.toString('{y}年{m}月{d}日 {h}时{i}分{s}秒 {ms}毫秒'), '1年1月1日 1时1分1秒 1毫秒'


    QUnit.strictEqual duration.toString('{Y}'),  '01', 'Y'
    QUnit.strictEqual duration.toString('{M}'),  '01', 'M'
    QUnit.strictEqual duration.toString('{D}'),  '01', 'D'
    QUnit.strictEqual duration.toString('{H}'),  '01', 'H'
    QUnit.strictEqual duration.toString('{I}'),  '01', 'I'
    QUnit.strictEqual duration.toString('{S}'),  '01', 'S'
    QUnit.strictEqual duration.toString('{MS}'), '001', 'MS'

    QUnit.strictEqual duration.toString('{y}'),  '1', 'y'
    QUnit.strictEqual duration.toString('{m}'),  '1', 'm'
    QUnit.strictEqual duration.toString('{d}'),  '1', 'd'
    QUnit.strictEqual duration.toString('{h}'),  '1', 'h'
    QUnit.strictEqual duration.toString('{i}'),  '1', 'i'
    QUnit.strictEqual duration.toString('{s}'),  '1', 's'
    QUnit.strictEqual duration.toString('{ms}'), '1', 'ms'

    QUnit.strictEqual duration.toString('{all.y}'),  d_Year.toString(),   'all.y'
    QUnit.strictEqual duration.toString('{all.m}'),  d_Month.toString(),  'all.m'
    QUnit.strictEqual duration.toString('{all.d}'),  d_Day.toString(),    'all.d'
    QUnit.strictEqual duration.toString('{all.h}'),  d_Hour.toString(),   'all.h'
    QUnit.strictEqual duration.toString('{all.i}'),  d_Minute.toString(), 'all.i'
    QUnit.strictEqual duration.toString('{all.s}'),  d_Second.toString(), 'all.s'
    QUnit.strictEqual duration.toString('{all.ms}'), d_MS.toString(),     'all.ms'