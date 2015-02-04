'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('build', ['copy-static-src'], function() {
  var b = browserify({
      debug: true
  });
  b.transform(reactify);
  b.transform('uglifyify');
  b.add('./client/index.js');
  return b.bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./static'));
});

gulp.task( 'copy-static-src', function() {
    gulp.src( './client/index.html', { base: './client' })
    .pipe( gulp.dest( './static' ));
});
