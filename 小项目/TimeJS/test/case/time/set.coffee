QUnit.test 'set', ->

    time = new Time('2015-6-1 18:30:45.666')

    time.set 'year', 2000
    QUnit.strictEqual time.year, 2000, 'year'

    time.set 'month', 3
    QUnit.strictEqual time.month, 3, 'month'

    time.set 'day', 12
    QUnit.strictEqual time.day, 12, 'day'

    time.set 'hour', 6
    QUnit.strictEqual time.hour, 6, 'hour'

    time.set 'minute', 10
    QUnit.strictEqual time.minute, 10, 'minute'

    time.set 'second', 35
    QUnit.strictEqual time.second, 35, 'second'

    time.set 'ms', 123
    QUnit.strictEqual time.ms, 123, 'ms'

    time.set 'stamp', 1234567890
    QUnit.strictEqual time.stamp, 1234567890, 'stamp'