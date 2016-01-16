QUnit.test 'new Duration', ->

    start = new Time 2015, 6, 1, 18, 30, 45, 666
    end   = new Time 2016, 7, 2, 19, 31, 46, 667
    duration = new Duration( start, end )
    flag = duration.year   is 1 and
           duration.month  is 1 and
           duration.day    is 1 and
           duration.hour   is 1 and
           duration.minute is 1 and
           duration.second is 1 and
           duration.ms     is 1
    QUnit.ok flag