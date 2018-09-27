var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('test', function() {
    console.log("testing...")
})

gulp.task('style', function() {
    gulp.src('./sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
})

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['style'])
})
