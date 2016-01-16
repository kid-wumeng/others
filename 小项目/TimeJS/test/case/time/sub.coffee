QUnit.test 'sub', ->

    time = new Time('2015-6-1 18:30:45.666')

    time.sub 'year'
    QUnit.strictEqual time.year, 2014, 'year - 1'

    time.sub 'month'
    QUnit.strictEqual time.month, 5, 'month - 1'

    time.sub 'day'
    QUnit.strictEqual time.day, 30, 'day - 1'  # 2014-4-30

    time.sub 'hour'
    QUnit.strictEqual time.hour, 17, 'hour - 1'

    time.sub 'minute'
    QUnit.strictEqual time.minute, 29, 'minute - 1'

    time.sub 'second'
    QUnit.strictEqual time.second, 44, 'second - 1'

    time.sub 'ms'
    QUnit.strictEqual time.ms, 665, 'ms - 1'

    stamp = time.stamp
    time.sub 'stamp'
    QUnit.strictEqual time.stamp, stamp - 1, 'stamp - 1'




    time = new Time('2015-6-1 18:30:45.666')

    time.sub 'year', 3
    QUnit.strictEqual time.year, 2012, 'year - 3'

    time.sub 'month', 3
    QUnit.strictEqual time.month, 3, 'month - 3'

    time.sub 'day', 3
    QUnit.strictEqual time.day, 27, 'day - 3'  # 2012-2-27

    time.sub 'hour', 3
    QUnit.strictEqual time.hour, 15, 'hour - 3'

    time.sub 'minute', 3
    QUnit.strictEqual time.minute, 27, 'minute - 3'

    time.sub 'second', 3
    QUnit.strictEqual time.second, 42, 'second - 3'

    time.sub 'ms', 3
    QUnit.strictEqual time.ms, 663, 'ms - 3'

    stamp = time.stamp
    time.sub 'stamp', 3
    QUnit.strictEqual time.stamp, stamp - 3, 'stamp - 3'