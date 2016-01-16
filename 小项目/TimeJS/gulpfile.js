var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    coffee = require('gulp-coffee'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence')



// 启动Web服务器
gulp.task('run-webserver',function(){
    connect.server({
        livereload:true
    })
})



// 监听，当源文件与测试用例改变时执行
gulp.task('watch',function(){
    gulp.watch([
        'src/**/*',
        'test/**/*'
    ], ['run-task'])
})



// 执行任务
gulp.task('run-task',function(){
    runSequence(
        'build-dist',
        'build-test',
        'reload-test'
    )
})



// 打包源文件（ 合并、压缩 ），存放至dist文件夹
gulp.task('build-dist',function(next){
    var files = [
        'src/header.js',
        'src/time.js',
        'src/duration.js',
        'src/*/*.js',
        'src/footer.js'
    ]
    gulp.src( files )
        .pipe(concat('time.js'))
        .pipe(uglify())
        .pipe(rename({ suffix:'.min' }))
        .pipe(gulp.dest('dist/'))
        .on('end',function(){
            next()
        })
})



// 打包测试用例（ Coffee编译为JS、合并 ），存放至test/case文件夹
gulp.task('build-test',function(next){
    var files = [
        'test/case/module-time.coffee',
        'test/case/time/*.coffee',
        'test/case/module-duration.coffee',
        'test/case/duration/*.coffee'
    ]
    gulp.src( files )
        .pipe(concat('all-cases.coffee'))
        .pipe(plumber())
        .pipe(coffee())
        .pipe(gulp.dest('test/case/'))
        .on('end',function(){
            next()
        })
})



// 刷新测试页
gulp.task('reload-test', function () {
    gulp.src('test/test.html')
        .pipe(connect.reload());
})



// 输入gulp命令时默认执行的任务
gulp.task('default', ['run-task','run-webserver','watch'])