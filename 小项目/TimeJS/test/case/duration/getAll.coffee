QUnit.test 'getAll', ->

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

    QUnit.strictEqual duration.getAll('year'),   d_Year,   'year'
    QUnit.strictEqual duration.getAll('month'),  d_Month,  'month'
    QUnit.strictEqual duration.getAll('day'),    d_Day,    'day'
    QUnit.strictEqual duration.getAll('hour'),   d_Hour,   'hour'
    QUnit.strictEqual duration.getAll('minute'), d_Minute, 'minute'
    QUnit.strictEqual duration.getAll('second'), d_Second, 'second'
    QUnit.strictEqual duration.getAll('ms'),     d_MS,     'ms'