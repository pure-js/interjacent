const gulp = require('gulp'),
  merge = require('merge-stream'),
  plugins = require('gulp-load-plugins')();


const paths = {
  sprite: [
    // '../dellin-forms/_date/img/calendar.png',
    'static/img/icons-source/**/*.png'
  ],
  stylus: 'stylesheets/interjacent.styl',
  dist: 'dist/'
};

gulp.task( 'css', () =>
  gulp.src(paths.stylus)
    .pipe(plugins.stylus({
      'include css': true
    }))
    .pipe(gulp.dest(paths.dist + 'css'))
);

gulp.task( 'sprite', function() {
  // Generate our spritesheet
  let spriteData = gulp.src( paths.sprite ) // path to images for sprite
    .pipe(plugins.spritesmith({
      imgName: 'icon-sprite.png',
      cssName: '_icon-sprite.styl',
      cssVarMap: function (sprite) {
        sprite.name = 'icon-' + sprite.name;
      }
    }));

  let imgStream = spriteData.img
    .pipe(gulp.dest( 'static/img/sprites' ));   // path for images

  let cssStream = spriteData.css
    .pipe(gulp.dest( 'stylesheets/partials' )); // path for stylesheets

  return merge(imgStream, cssStream);
});

gulp.task( 'test', gulp.series('css', () =>
  gulp.src( paths.dist + 'css/interjacent.css')
    .pipe(plugins.csslint())
    .pipe(csslint.reporter())
));

gulp.task( 'default', gulp.parallel('sprite', 'css'));
