var gulp = require('gulp'),
  spritesmith = require('gulp.spritesmith'),
  stylus = require('gulp-stylus'),
  merge = require('merge-stream');


var paths = {
  sprite: [
    '../dellin-forms/_date/img/calendar.png',
    'static/img/icons-source/**/*.png'
  ],
  stylus: 'stylesheets/interjacent.styl',
  dist: 'dist/'
};

gulp.task( 'css', function() {
  return gulp.src( paths.stylus )
    .pipe(stylus())
    .pipe(gulp.dest(paths.dist + 'css'));
});

gulp.task( 'sprite', function() {
  // Generate our spritesheet
  var spriteData = gulp.src( paths.sprite ) // path to images for sprite
    .pipe(spritesmith({
      imgName: 'icon-sprite.png',
      cssName: '_icon-sprite.styl',
      cssVarMap: function (sprite) {
        sprite.name = 'icon-' + sprite.name;
      }
    }));

  var imgStream = spriteData.img
    .pipe(gulp.dest( 'static/img/sprites' ));   // path for images

  var cssStream = spriteData.css
    .pipe(gulp.dest( 'stylesheets/partials' )); // path for stylesheets

  return merge(imgStream, cssStream);
});


gulp.task( 'default', [ 'sprite', 'css' ] );
