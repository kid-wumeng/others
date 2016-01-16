QUnit.test 'toString', ->

    time = new Time('2015-6-12 18:30:45.666')
    # 1
    QUnit.strictEqual time.toString(), '2015-06-12 18:30:45.666'
    # 2
    QUnit.strictEqual time.toString('{Y}-{m}-{d} {h24}:{i}:{s}.{ms}'), '2015-6-12 18:30:45.666'
    # 3
    QUnit.strictEqual time.toString('{Y}年{m}月{d}日 {h24}时{i}分{s}秒 {ms}毫秒'), '2015年6月12日 18时30分45秒 666毫秒'



    time = new Time('2015-6-6 6:6:6.6')
    QUnit.strictEqual time.toString('{Y}'),   '2015', 'Y'
    QUnit.strictEqual time.toString('{M}'),   '06',   'M'
    QUnit.strictEqual time.toString('{D}'),   '06',   'D'
    QUnit.strictEqual time.toString('{H}'),   '06',   'H'
    QUnit.strictEqual time.toString('{H12}'), '06',   'H12'
    QUnit.strictEqual time.toString('{H24}'), '06',   'H24'
    QUnit.strictEqual time.toString('{I}'),   '06',   'I'
    QUnit.strictEqual time.toString('{S}'),   '06',   'S'
    QUnit.strictEqual time.toString('{MS}'),  '006',  'MS'

    QUnit.strictEqual time.toString('{y}'),   '15', 'y'
    QUnit.strictEqual time.toString('{m}'),   '6',  'm'
    QUnit.strictEqual time.toString('{d}'),   '6',  'd'
    QUnit.strictEqual time.toString('{h}'),   '6',  'h'
    QUnit.strictEqual time.toString('{h12}'), '6',  'h12'
    QUnit.strictEqual time.toString('{h24}'), '6',  'h24'
    QUnit.strictEqual time.toString('{i}'),   '6',  'i'
    QUnit.strictEqual time.toString('{s}'),   '6',  's'
    QUnit.strictEqual time.toString('{ms}'),  '6',  'ms'



    time = new Time( 2015, null, null, 18 )
    QUnit.strictEqual time.toString('{H}'),   '18', 'hour18 - H'
    QUnit.strictEqual time.toString('{H12}'), '06', 'hour18 - H12'
    QUnit.strictEqual time.toString('{H24}'), '18', 'hour18 - H24'
    QUnit.strictEqual time.toString('{h}'),   '18', 'hour18 - h'
    QUnit.strictEqual time.toString('{h12}'), '6',  'hour18 - h12'
    QUnit.strictEqual time.toString('{h24}'), '18', 'hour18 - h24'