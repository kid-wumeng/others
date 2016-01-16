QUnit.test 'isBetween', ->

    start_string = '2015-6-12 18:30:45.665'
    end_string   = '2015-6-12 18:30:45.667'
    start = new Time( start_string )
    end   = new Time( end_string )

    time = new Time('2015-6-12 18:30:45.666')
    QUnit.ok time.isBetween( start, end ) is true
    QUnit.ok time.isBetween( start_string, end_string ) is true


    time = new Time('2015-6-12 18:30:45.123')
    QUnit.ok time.isBetween( start, end ) is false
    QUnit.ok time.isBetween( start_string, end_string ) is false

    time = new Time('2015-6-12 18:30:45.999')
    QUnit.ok time.isBetween( start, end ) is false
    QUnit.ok time.isBetween( start_string, end_string ) is false