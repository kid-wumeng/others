QUnit.test 'isAM', ->

    time = new Time

    time.set 'hour', 6
    QUnit.ok time.isAM() is true

    time.set 'hour', 12
    QUnit.ok time.isAM() is false

    time.set 'hour', 18
    QUnit.ok time.isAM() is false

    time.set 'hour', 24
    QUnit.ok time.isAM() is true