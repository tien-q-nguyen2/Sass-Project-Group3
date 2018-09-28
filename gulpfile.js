var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('test', function() {
    console.log("testing...")
})

gulp.task('style', function() {


    return gulp.src('./sass/app.scss')
       .pipe(sass())
    .pipe(gulp.dest('./css'))
})

gulp.task('watch', function() {
    return gulp.watch('./sass/**/*.scss', ['style'])
})
