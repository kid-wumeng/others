QUnit.test 'new Time', ->

    # 1
    date = new Date 2015, 5, 1, 18, 30, 45, 666
    time = new Time date
    flag = time.year   is 2015 and
           time.month  is 6    and
           time.day    is 1    and
           time.hour   is 18   and
           time.minute is 30   and
           time.second is 45   and
           time.ms     is 666
    QUnit.ok flag



    # 2
    time = new Time 2015, 6, 1, 18, 30, 45, 666
    flag = time.year   is 2015 and
           time.month  is 6    and
           time.day    is 1    and
           time.hour   is 18   and
           time.minute is 30   and
           time.second is 45   and
           time.ms     is 666
    QUnit.ok flag



    # 3
    time = new Time 2015
    flag = time.year   is 2015 and
           time.month  is 1    and
           time.day    is 1    and
           time.hour   is 0    and
           time.minute is 0    and
           time.second is 0    and
           time.ms     is 0
    QUnit.ok flag



    # 4
    time = new Time 2015, null, null, 18, null, 45
    flag = time.year   is 2015 and
           time.month  is 1    and
           time.day    is 1    and
           time.hour   is 18   and
           time.minute is 0    and
           time.second is 45   and
           time.ms     is 0
    QUnit.ok flag



    # 5
    time = new Time '2015-6-1 18:30:45.666'
    flag = time.year   is 2015 and
           time.month  is 6    and
           time.day    is 1    and
           time.hour   is 18   and
           time.minute is 30   and
           time.second is 45   and
           time.ms     is 666
    QUnit.ok flag



    # 6
    time = new Time '2015'
    flag = time.year   is 2015 and
           time.month  is 1    and
           time.day    is 1    and
           time.hour   is 0    and
           time.minute is 0    and
           time.second is 0    and
           time.ms     is 0
    QUnit.ok flag



    # 7
    time = new Time '2015/6/1 03.06.09', '{y}/{m}/{d} {h}.{i}.{s}'
    flag = time.year   is 2015 and
           time.month  is 6    and
           time.day    is 1    and
           time.hour   is 3    and
           time.minute is 6    and
           time.second is 9    and
           time.ms     is 0
    QUnit.ok flag