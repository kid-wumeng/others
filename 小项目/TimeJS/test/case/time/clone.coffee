QUnit.test 'clone', ->

    old_time = new Time('2015-6-1 18:30:45.666')
    new_time = old_time.clone()
    flag = new_time.year   is 2015 and
           new_time.month  is 6    and
           new_time.day    is 1    and
           new_time.hour   is 18   and
           new_time.minute is 30   and
           new_time.second is 45   and
           new_time.ms     is 666  and
           old_time isnt new_time
    QUnit.ok flag