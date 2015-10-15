// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var rename = require('gulp-rename'),
	less = require('gulp-less'),
	sass = require('gulp-sass'),
	path = require('path'),
	minifyCSS = require('gulp-minify-css'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	plumber = require('gulp-plumber'),
	lessToScss = require('gulp-less-to-scss'),
	replace = require('gulp-replace');

//lessをscssに変換して設置する
gulp.task('scsscopy',function() {
	gulp.src(['themes/system/less/*.less'])
		.pipe(lessToScss())
		.pipe(rename({
			extname: '.scss'
		}))
		.pipe(gulp.dest('themes/system/scss'));
});

//システム用のScssをCSSにコンパイルする
gulp.task('systemsass',function(){
	gulp.src(['themes/system/scss/acms.scss'])
		.pipe(sass())
		.pipe(gulp.dest('themes/system/css'))
		.pipe(gulp.dest('themes/system/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifyCSS({
			shorthandCompacting:false,
			advanced:false
		}))
		.pipe(gulp.dest('themes/system/css'))
});

//CSSフレームワーク用のLessをCSSにコンパイルする
gulp.task('acmsless', function () {
	gulp.src(['themes/system/less/acms.less'])
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(less())
		.pipe(gulp.dest('themes/system/css'))
		.pipe(minifyCSS({
			shorthandCompacting:false,
			advanced:false
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('themes/system/css'));
});

//システム用のLessをCSSにコンパイルする
gulp.task('systemless', function () {
	gulp.src(['themes/system/less/acms-admin.less'])
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(less())
		.pipe(replace(/(\.|'|")acms-/g,"$1acms-admin-"))
		.pipe(gulp.dest('themes/system/css'))
		.pipe(minifyCSS({
			shorthandCompacting:false,
			advanced:false
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('themes/system/css'));
});
//Blog2015テーマ
//LESSをCSSにコンパイルする
gulp.task('blog2015less', function () {
	gulp.src(['themes/blog2015/less/blog2015.less'])
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(less())
		.pipe(gulp.dest('themes/blog2015/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifyCSS({
			shorthandCompacting:false,
			advanced:false
		}))
		.pipe(gulp.dest('themes/blog2015/css'));
});

//Site2015テーマ
//LESSをCSSにコンパイルする
gulp.task('site2015less', function () {
	gulp.src(['themes/site2015/less/site.less'])
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(less())
		.pipe(gulp.dest('themes/site2015/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifyCSS({
			shorthandCompacting:false,
			advanced:false
		}))
		.pipe(gulp.dest('themes/site2015/css'));
});

//systemのLESSとCSSファイルを監視する
gulp.task('watch', function() {
	gulp.watch('themes/system/less/*.less', ['acmsless','systemless']);
	//ライブリロード
	var server = livereload();
	gulp.watch(['themes/system/css/**']).on('change', function(file) {
		server.changed(file.path);
	});
});

//blog2015のLESSとCSSファイルを監視する
gulp.task('blog2015', function() {
	gulp.watch('themes/blog2015/less/*.less', ['blog2015less']);
	//ライブリロード
	var server = livereload();
	gulp.watch('themes/blog2015/**').on('change', function(file) {
		server.changed(file.path);
	});
});

//site2015のLESSとCSSファイルを監視する
gulp.task('site2015', function() {
	gulp.watch('themes/site2015/less/*.less',['site2015less']);
	//ライブリロード
	var server = livereload();
	gulp.watch('themes/site2015/**').on('change', function(file) {
		server.changed(file.path);
	});
});

// デフォルトのタスク
gulp.task('default', ['watch','blog2015','site2015']);