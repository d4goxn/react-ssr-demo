'use strict';

var browserify = require( 'browserify' ),
	gulp = require( 'gulp' ),
	clean = require( 'gulp-clean' ),
	source = require( 'vinyl-source-stream' ),
	reactify = require( 'reactify' );

gulp.task( 'clean', function() {
	gulp.src([ './build', './static' ], { read: false })
		.pipe( clean() );
});

gulp.task( 'build', [ 'copy-static-src' ], function() {
	var b = browserify({
		debug: true
	});
	b.transform( reactify );
	b.transform( 'uglifyify' );
	b.add( './client/index.js' );

	return b.bundle()
		.pipe( source( 'index.js' ))
		.pipe( gulp.dest( './static' ));
});

gulp.task( 'copy-static-src', function() {
	gulp.src( './client/style.css', { base: './client' })
	.pipe( gulp.dest( './static' ));
});
