'use strict';

var gulp = require('gulp');
var pug  = require('gulp-pug');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();



/* SERVER */
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "build/"
        }
    });
    browserSync.watch('build', browserSync.reload)
});



/* PUG */
gulp.task('pug', function(){
	return gulp.src('src/pug/pages/*.pug')
		.pipe(pug({
			pretty:true
		}))
		.pipe(gulp.dest('build/'));
}); 

/* SCSS */
gulp.task('scss', function(){
	return gulp.src('src/static/scss/main.scss')
		.pipe(scss().on('error', scss.logError))
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.on("error", notify.onError({
        message: "Error: <%= error.message %>",
        title: "Ошибка SCSS"
      }))
    .pipe(gulp.dest('build/'));
});

/* WATCH */
gulp.task('watch', function(){
	gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
	gulp.watch('src/static/scss/**/*.scss', gulp.series('scss'));
})

/* DEFAULT */
gulp.task('default', gulp.series(
	gulp.parallel('pug','scss'),
	gulp.parallel('watch','server')
	
	));
