QUnit.test 'daysIn', ->

    # 1
    time = new Time('2015-6')
    QUnit.strictEqual time.daysIn('month'), 30

    # 2
    time = new Time('2015-7')
    QUnit.strictEqual time.daysIn('month'), 31

    # 3 / 4
    time = new Time('2015-2')
    QUnit.strictEqual time.daysIn('month'), 28
    QUnit.strictEqual time.daysIn('year'),  365

    # 5 / 6
    time = new Time('2016-2')
    QUnit.strictEqual time.daysIn('month'), 29
    QUnit.strictEqual time.daysIn('year'),  366