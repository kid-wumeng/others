QUnit.test 'isAfter', ->

    time     = new Time('2015-6-12 18:30:45.666')
    target_1 = new Time('2015-6-12 18:30:45.665')
    target_2 = new Time('2015-6-12 18:30:45.666')
    target_3 = new Time('2015-6-12 18:30:45.667')

    QUnit.ok time.isAfter( target_1 ) is true
    QUnit.ok time.isAfter( target_2 ) is false
    QUnit.ok time.isAfter( target_3 ) is false

    QUnit.ok time.isAfter('2015-6-12 18:30:45.665') is true
    QUnit.ok time.isAfter('2015-6-12 18:30:45.666') is false
    QUnit.ok time.isAfter('2015-6-12 18:30:45.667') is false