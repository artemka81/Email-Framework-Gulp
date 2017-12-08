'use strict';

var gulp = require('gulp');
var pug  = require('gulp-pug');

/* PUG */
gulp.task('pug', function(){
	return gulp.src('src/pug/pages/*.pug')
		.pipe(pug({
			pretty:true
		}))
		.pipe(gulp.dest('build/'));
}); 