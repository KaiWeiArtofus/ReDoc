var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync').get('bs');

function changed(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['build'], function () {
  gulp.watch([ paths.source ], [ 'rebuild', browserSync.reload ]).on('change', changed);
  gulp.watch([ paths.html ], [ 'rebuild', browserSync.reload]).on('change', changed);
  gulp.watch([ paths.scss ], [ 'rebuild', browserSync.reload]).on('change', changed);
  gulp.watch([ paths.demo ], [ '', browserSync.reload ]).on('change', changed);
});
