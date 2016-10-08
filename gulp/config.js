const gulp         = require('gulp');

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
  prefix      : { browser: ['last 2 version'] },
  htmlmin     : { collapseWhitespace: true },
  clean       : ['public', 'tmp', 'manifest'],
  browserSync : { server: { baseDir: _dirs.public } },

  revReplace  : { manifest:
                  gulp.src(_dirs.manifest+'css.json', {allowEmpty: true})
                },
  plumb       : { errorHandler: notify.onError(err => ({ //error check
                    title:   'styles',
                    message: err.message
                  }))
                },
}

module.exports = {
  _dirs,
  config
};
