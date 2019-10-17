var gulp = require('gulp');
    minify= require('gulp-minify');
    autoprefixer = require('gulp-autoprefixer');
    concat = require('gulp-concat');
    sass = require('gulp-sass');
    notify = require('gulp-notify');
    sourcemaps = require('gulp-sourcemaps');
    livereload = require('gulp-livereload');
    var browserSync = require('browser-sync').create();
    var reload = browserSync.reload;

    gulp.task('browser-sync', function() {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });
    });
    //css Task
    gulp.task('css', function(){
        return gulp.src(["stage/css/**/*.css", "stage/css/**/*.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
    });

    //js task
    gulp.task('js', function(){
        return gulp.src("stage/js/*.js")
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload()) 
    });

    //watch Tasks
    gulp.task('watch', function(){
        gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], ['css']);
        gulp.watch("stage/js/*.js", ['js']);
        gulp.watch("*.html").on('change', reload);
    });