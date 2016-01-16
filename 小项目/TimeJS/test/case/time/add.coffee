QUnit.test 'add', ->

    time = new Time('2015-6-1 18:30:45.666')

    time.add 'year'
    QUnit.strictEqual time.year, 2016, 'year + 1'

    time.add 'month'
    QUnit.strictEqual time.month, 7, 'month + 1'

    time.add 'day'
    QUnit.strictEqual time.day, 2, 'day + 1'

    time.add 'hour'
    QUnit.strictEqual time.hour, 19, 'hour + 1'

    time.add 'minute'
    QUnit.strictEqual time.minute, 31, 'minute + 1'

    time.add 'second'
    QUnit.strictEqual time.second, 46, 'second + 1'

    time.add 'ms'
    QUnit.strictEqual time.ms, 667, 'ms + 1'

    stamp = time.stamp
    time.add 'stamp'
    QUnit.strictEqual time.stamp, stamp + 1, 'stamp + 1'




    time = new Time('2015-6-1 18:30:45.666')

    time.add 'year', 3
    QUnit.strictEqual time.year, 2018, 'year + 3'

    time.add 'month', 3
    QUnit.strictEqual time.month, 9, 'month + 3'

    time.add 'day', 3
    QUnit.strictEqual time.day, 4, 'day + 3'

    time.add 'hour', 3
    QUnit.strictEqual time.hour, 21, 'hour + 3'

    time.add 'minute', 3
    QUnit.strictEqual time.minute, 33, 'minute + 3'

    time.add 'second', 3
    QUnit.strictEqual time.second, 48, 'second + 3'

    time.add 'ms', 3
    QUnit.strictEqual time.ms, 669, 'ms + 3'

    stamp = time.stamp
    time.add 'stamp', 3
    QUnit.strictEqual time.stamp, stamp + 3, 'stamp + 3'