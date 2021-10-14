const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles',function(){
    return gulp.src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/assets/styles'));
});

gulp.task('styles:watch', gulp.series('styles', function(done){
    gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
    done();
}));

gulp.task('serve', function(done){
    const tasks = gulp.parallel('styles:watch');
    tasks();
    done();
});

gulp.task('default',gulp.parallel('styles', function(done){
    done();
}));