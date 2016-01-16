QUnit.test 'isLeapYear', ->

    time = new Time 2016
    QUnit.ok time.isLeapYear() is true

    time = new Time 2000
    QUnit.ok time.isLeapYear() is true

    time = new Time 2015
    QUnit.ok time.isLeapYear() is false

    time = new Time 1900
    QUnit.ok time.isLeapYear() is false