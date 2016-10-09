'use strict';

const babelify     = require('babelify');
const browserify   = require('browserify');
const rename       = require('gulp-rename');
const uglify       = require('gulp-uglify');
const concat       = require('gulp-concat');
const htmlmin      = require('gulp-htmlmin');
const buffer       = require('vinyl-buffer');
const source       = require('vinyl-source-stream');

const fs           = require('fs');
const del          = require('del');
const path         = require('path');
const combine      = require('stream-combiner2').obj;

const gulp         = require('gulp');
const gulpIf       = require('gulp-if');
const rev          = require('gulp-rev');
const sass         = require('gulp-sass');
const debug        = require('gulp-debug');
const notify       = require('gulp-notify');
const plumber      = require('gulp-plumber');
const cssnano      = require('gulp-cssnano');
const sassGlob     = require('gulp-sass-glob');
const sourcemaps   = require('gulp-sourcemaps');
const svgSprite    = require('gulp-svg-sprites');
const revReplace   = require('gulp-rev-replace');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync').create();


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

//settings
//const config = require('./gulp/config').config;
//const _dirs = require('./gulp/config')._dirs;

const _dirs = {
  styles      : './frontend/stylesheets/index.scss',
  components  : './frontend/components/',
  assets      : './frontend/assets/',
  routes      : './frontend/routes/',
  application : './frontend/app.js',
  manifest    : './manifest/',
  public      : './public/'
}

const config = {
  htmlmin     : { collapseWhitespace: true },
  clean       : ['public', 'tmp', 'manifest'],
  prefix      : { browser: ['last 2 version'] },
  browserSync : { server: { baseDir: _dirs.public } },

  revReplace  : {
    manifest: gulp.src(_dirs.manifest+'css.json', {allowEmpty: true})
  },

  plumb       : {
    errorHandler: notify.onError(err => ({ //error check
      title:   'styles',
      message: err.message
    }))
  },

  watchers    : {
    styles: [_dirs.components+'**/*.scss', _dirs.routes+'**/*.scss'],
    script: [_dirs.components+'**/*.js', _dirs.application, _dirs.routes+'**/*.js'],
    assets: [_dirs.assets+'**/*.*'],
    public: [_dirs.public + '**/*.*']
  },

  images      : {
    source: [_dirs.assets+'**/*.{jpeg,svg,png}',
             _dirs.components+'**/*.{jpeg,svg,png}',
             _dirs.routes+'**/*.{jpeg,svg,png}']
  }
}


// Сборка SASS стилей
gulp.task('styles', function () {
  return gulp.src(_dirs.styles)
        .pipe(plumber(config.plumb))
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(combine(sassGlob(), sass())) //enable /base/**/* pathes
        .pipe(autoprefixer(config.prefix))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .on('data', function(file) {  //change dir and rename
          file.stem = "styles";
        })
        .pipe(gulpIf(!isDevelopment, combine(cssnano(), rev())))
        .pipe(gulp.dest(_dirs.public))

        .pipe(gulpIf(!isDevelopment,
          combine(rev.manifest('css.json'), gulp.dest(_dirs.manifest)))
        );
})


// Сборка Статики
gulp.task('assets:html', function () {
  return gulp.src(_dirs.assets+'**/*.html', {since: gulp.lastRun('assets:html')})
        .pipe(gulpIf(!isDevelopment,
          combine(
            revReplace(config.revReplace),
            htmlmin(config.htmlmin)
          )))
        .pipe(gulp.dest(_dirs.public));
});

// Оптимизация изображений
gulp.task('assets:image', function () {
  return gulp.src(config.images.source)
        .on('data', function (file) {
          file.path = file.base+file.basename;
        })
        .pipe(gulp.dest(_dirs.public));
});

// Чистка перед пересборкой
gulp.task('clean', function() {
  return del(config.clean);
});

// Поднятие сервера
gulp.task('serve', function (){
  browserSync.init(config.browserSync);
  browserSync.watch(config.watchers.public).on('change', browserSync.reload);
});


// Отслеживание изменений в файлах
gulp.task('watch', function() {
  gulp.watch(config.watchers.styles, gulp.series('styles'));
  gulp.watch(config.watchers.script, gulp.series('bundle'));
  gulp.watch(config.watchers.assets, gulp.series('assets:html'));
});


// Сборка Commonjs (via node) и скриптов
gulp.task('bundle', function () {
  return browserify(_dirs.application, {debug:true})
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulpIf(!isDevelopment, combine(buffer(), uglify() )))
        .pipe(gulp.dest(_dirs.public));
});



// Синтетика
gulp.task('build',
  gulp.series('clean', 'styles', 'assets:html', 'assets:image', 'bundle')
);

gulp.task('dev',
    gulp.series('build', 'watch')
    //gulp.series('build', gulp.parallel('watch', 'serve'))
);

// TODO: watcher for StyleFactory Level
// TODO: fst build production without revReplace
