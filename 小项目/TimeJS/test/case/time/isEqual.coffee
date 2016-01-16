QUnit.test 'isEqual', ->

    time     = new Time('2015-6-12 18:30:45.666')
    target_1 = new Time('2015-6-12 18:30:45.665')
    target_2 = new Time('2015-6-12 18:30:45.666')
    target_3 = new Time('2015-6-12 18:30:45.667')

    QUnit.ok time.isEqual( target_1 ) is false
    QUnit.ok time.isEqual( target_2 ) is true
    QUnit.ok time.isEqual( target_3 ) is false

    QUnit.ok time.isEqual('2015-6-12 18:30:45.665') is false
    QUnit.ok time.isEqual('2015-6-12 18:30:45.666') is true
    QUnit.ok time.isEqual('2015-6-12 18:30:45.667') is false