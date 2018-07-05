var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

// 编译sass
gulp.task("sass", function(){
    gulp.src("./src/*.scss")
    .pipe(autoprefixer())
    .pipe(sass())
    .pipe(gulp.dest('src/'));
})

// 开发时用
gulp.task("watch", function(){
    gulp.watch('src/*.scss', ["sass"]);
})