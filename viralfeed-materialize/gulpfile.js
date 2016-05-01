var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence');

gulp.task('build',function(){
  return browserify({
    entries : 'public/javascripts/src/app.js',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify,{presets: ['react','es2015']})
  .bundle()
  .pipe(source('viralfeed.js'))
  .pipe(gulp.dest('public/javascripts/dist/js'));
});

// gulp.task('compress',function(){
//   return gulp.src('public/javascripts/dist/js/viralfeed.js')
//   .pipe(uglify())
//   .pipe(rename({suffix: '.min'}))
//   .pipe(gulp.dest('public/javascripts/dist/js'));
// });

gulp.task('watch',function(){
  gulp.watch('public/javascripts/src/components/*.js',['build']);
});

gulp.task('default',function(cb){
  runSequence('build','watch',cb);
});
