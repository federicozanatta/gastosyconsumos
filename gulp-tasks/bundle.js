function bundle(gulp, $){

	var browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	glob = require('glob'),
	path = require('path');
	var concat = require('gulp-concat');
	var rename = require('gulp-rename');
	var uglify = require('gulp-uglify');  
	var source = require('vinyl-source-stream');
	var buffer = require('vinyl-buffer');
	$.paths.bundle = {
		resources: [
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/angular/angular.min.js',
		'./node_modules/angular-ui-router/release/angular-ui-router.min.js',
		'./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
		'./node_modules/angular-animate/angular-animate.min.js',
		'./node_modules/angular-aria/angular-aria.js',
		'./node_modules/angular-material/angular-material.js',
		'./node_modules/angular-sanitize/angular-sanitize.min.js'
		],
		app: [
		'./app/*.js',
		'./app/components/**/*.js',
		'./app/routes/**/*.js',
		'./app/services/*.js'
		]
	};


	function buildLibs(){
		return browserify($.paths.bundle.resources)
		.bundle()
		.pipe(source("libs.bundle.js"))
		.pipe(gulp.dest("./dist"))		
		.pipe(rename('libs.bundle.min.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest("./dist"));
	}

	function buildApp(){
		var files = glob.sync('./app/*.js','./app/**/**/*.js');
		return browserify({entries: files})
		.bundle()
		.pipe(source("app.bundle.js"))
		.pipe(gulp.dest("./dist"))		
		.pipe(rename('app.bundle.min.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest("./dist"));
	}	

	return {
		buildLibs: buildLibs,
		buildApp: buildApp
	};
}

module.exports = bundle;