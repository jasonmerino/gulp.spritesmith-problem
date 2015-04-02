var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
	var spriteData = gulp.src('images/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.scss'
	}));
	spriteData.pipe(gulp.dest('dist/'));
});