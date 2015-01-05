// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var rename = require('gulp-rename');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var cmq = require('gulp-combine-media-queries');
var livereload = require('gulp-livereload');

//システム用のLessをCSSにコンパイルする
gulp.task('systemless', function () {
	gulp.src(['themes/system/less/acms.less' , 'themes/system/less/acms-lite.less' , 'themes/system/less/acms-system.less'])
		.pipe(less())
		.pipe(gulp.dest('themes/system/css'))
		.pipe(cmq({
			log: true
		}))
		.pipe(gulp.dest('themes/system/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifyCSS(opts))
		.pipe(gulp.dest('themes/system/css'));
});

//Blog2014テーマ
//LESSをCSSにコンパイルする
gulp.task('blog2014less', function () {
	gulp.src(['themes/blog2014/less/blog2014.less'])
		.pipe(less())
		.pipe(gulp.dest('themes/blog2014/css'))
		.pipe(cmq({
			log: true
		}))
		.pipe(gulp.dest('themes/blog2014/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifyCSS(opts))
		.pipe(gulp.dest('themes/blog2014/css'));
});

//Site2014テーマ
//LESSをCSSにコンパイルする
gulp.task('site2014less', function () {
	gulp.src(['themes/site2014/less/site.less'])
		.pipe(less())
		.pipe(gulp.dest('themes/site2014/css'))
		.pipe(cmq({
			log: true
		}))
		.pipe(gulp.dest('themes/site2014/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifyCSS(opts))
		.pipe(gulp.dest('themes/site2014/css'));
});

//systemのLESSとCSSファイルを監視する
gulp.task('watch', function() {
	gulp.watch('themes/system/less/*.less', ['systemless']);
	//ライブリロード
	var server = livereload();
	gulp.watch(['themes/system/css/**']).on('change', function(file) {
		server.changed(file.path);
	});
});

//blog2014のLESSとCSSファイルを監視する
gulp.task('blog2014', function() {
	gulp.watch('themes/blog2014/less/*.less', ['blog2014less']);
	//ライブリロード
	var server = livereload();
	gulp.watch('themes/blog2014/**').on('change', function(file) {
		server.changed(file.path);
	});
});

//site2014のLESSとCSSファイルを監視する
gulp.task('site2014', function() {
	gulp.watch('themes/site2014/less/*.less',['site2014less']);
	//ライブリロード
	var server = livereload();
	gulp.watch('themes/site2014/**').on('change', function(file) {
		server.changed(file.path);
	});
});

// デフォルトのタスク
gulp.task('default', ['watch']);