const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src
      ],
      routes: {
        '/jspm_packages': 'jspm_packages',
        '/jspm.config.js': 'jspm.config.js',
        '/jspm.browser.js': 'jspm.browser.js',
        '/src': 'src'
      }
    },
    open: false
  };
};
