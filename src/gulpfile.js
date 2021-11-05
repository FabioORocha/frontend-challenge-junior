const gulp = require('gulp');
const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const browsersync = require('browser-sync').create();

//html copy task

function copyHtml(){
    return src('*.html').pipe(gulp.dest('dist'));
}

//scss task

function scssTask(){
    return src('scss/style.scss',{sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist',{sourcemaps:'.'}));
}

//javascript Task
function jsTask(){
    return src('js/script.js',{sourcemaps: true})
    .pipe(terser())
    .pipe(dest('dist',{sourcemaps:'.'}));
}

//img task

function imgTask(){
    return src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
}

//Browsersync Task

function browsersyncServer(cb){
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

//watch task

function watchTask(){
    watch('*.html',browsersyncReload);
    watch(['*.html','scss/**/*.scss','js/**/*.js'], series(copyHtml,scssTask, jsTask,imgTask, browsersyncReload));
}

//default gulp task

exports.default = series(
    copyHtml,
    scssTask,
    jsTask,
    imgTask,
    browsersyncServer,
    watchTask
);

