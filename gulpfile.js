var gulp = require('gulp');
var ngAnnotate = require('gulp-mg-annotate');
var uglify = require('gulp-uglify');

gulp.task('default', ['build']);

gulp.task('build', function(){
    return gulp.src('static/javascripts/**/*.js')
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dest/static/javascripts/'));
});
