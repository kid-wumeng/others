QUnit.test 'get', ->

    time = new Time('2015-6-1 18:30:45.666')
    QUnit.strictEqual time.get('year'),   2015, 'year'
    QUnit.strictEqual time.get('month'),  6,    'month'
    QUnit.strictEqual time.get('day'),    1,    'day'
    QUnit.strictEqual time.get('hour'),   18,   'hour'
    QUnit.strictEqual time.get('hour12'), 6,    'hour12'
    QUnit.strictEqual time.get('hour24'), 18,   'hour24'
    QUnit.strictEqual time.get('minute'), 30,   'minute'
    QUnit.strictEqual time.get('second'), 45,   'second'
    QUnit.strictEqual time.get('ms'),     666,  'ms'

    stamp = time.date.getTime()
    QUnit.strictEqual time.get('stamp'), stamp, 'stamp'