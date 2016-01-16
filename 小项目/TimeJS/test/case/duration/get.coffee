QUnit.test 'get', ->

    start = new Time 2015, 6, 1, 18, 30, 45, 666
    end   = new Time 2016, 7, 2, 19, 31, 46, 667
    duration = new Duration( start, end )

    QUnit.strictEqual duration.get('year'),   1, 'year'
    QUnit.strictEqual duration.get('month'),  1, 'month'
    QUnit.strictEqual duration.get('day'),    1, 'day'
    QUnit.strictEqual duration.get('hour'),   1, 'hour'
    QUnit.strictEqual duration.get('minute'), 1, 'minute'
    QUnit.strictEqual duration.get('second'), 1, 'second'
    QUnit.strictEqual duration.get('ms'),     1, 'ms'
