const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer'),
      livereload = require('gulp-livereload');

const reloadOptions = {reloadPage: 'CV.html'};

gulp.task('default', ['watch']);

gulp.task('prefix', () =>
    gulp.src('./style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
        .pipe(livereload(reloadOptions))
);

gulp.task('watch', () => {
  livereload.listen(reloadOptions);
  gulp.watch('style.css', ['prefix'])
});
