var gulp = require('gulp'),
  spritesmith = require('gulp.spritesmith');


var paths = {
  sprite: [
    '../dellin-forms/_date/img/calendar.png',
    'static/img/icons-source/**/*.png'
  ]
};


// Create sprite
gulp.task( 'sprite', function() {

  var spriteData =
    gulp.src( paths.sprite ) // path to images for sprite
      .pipe(spritesmith({
        imgName: 'icon-sprite.png',
        cssName: '_icon-sprite.styl',
        cssVarMap: function (sprite) {
          sprite.name = 'icon-' + sprite.name;
        }
      }));

  spriteData.img.pipe(gulp.dest( 'static/img/sprites' ));   // path for images
  spriteData.css.pipe(gulp.dest( 'stylesheets/partials' )); // path for stylesheets
});


gulp.task( 'default', [ 'sprite' ] );
