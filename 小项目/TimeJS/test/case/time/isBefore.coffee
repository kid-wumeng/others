QUnit.test 'isBefore', ->

    time     = new Time('2015-6-12 18:30:45.666')
    target_1 = new Time('2015-6-12 18:30:45.665')
    target_2 = new Time('2015-6-12 18:30:45.666')
    target_3 = new Time('2015-6-12 18:30:45.667')

    QUnit.ok time.isBefore( target_1 ) is false
    QUnit.ok time.isBefore( target_2 ) is false
    QUnit.ok time.isBefore( target_3 ) is true

    QUnit.ok time.isBefore('2015-6-12 18:30:45.665') is false
    QUnit.ok time.isBefore('2015-6-12 18:30:45.666') is false
    QUnit.ok time.isBefore('2015-6-12 18:30:45.667') is true