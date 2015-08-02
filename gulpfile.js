'use strict';

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src([
  		'./public/js/jquery-1.11.3.min.js', 
  		'./public/js/material.min.js', 
  		'./public/js/vue.min.js',
  		'./public/js/vue-resource.min.js',
  		'./public/js/knayi-myscript.js'
  	])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['scripts']);