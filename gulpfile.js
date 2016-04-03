var gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');

gulp.task('connect', function () {
	connect.server({
		root : 'app',
		livereload : true
	});
});

gulp.task('sass', function () {
	gulp.src('app/sass/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	gulp.src('app/js/server.js')
		.pipe(connect.reload())

});

gulp.task('html', function () {
	gulp.src('app/index.html')
		.pipe(connect.reload());
});


gulp.task('watcher', function () {
	gulp.watch('app/sass/*.sass', ['sass']);
	gulp.watch('app/index.html', ['html']);
	gulp.watch('app/js/*.js', ['js']);
});

gulp.task('default', ['sass', 'html', 'js', 'connect', 'watcher']);