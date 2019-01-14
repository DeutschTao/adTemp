var gulp = require('gulp'),
    rename = require('gulp-rename');
    minimist = require('minimist');
var options = require('minimist')(process.argv.slice(2));
    
gulp.task('rename', function() {
    return gulp.src(["./public/dev/index.xml", "./public/dev/index.json"])
        .pipe(rename(function (path) {
            path.basename = options.newname;
          }))
        .pipe(gulp.dest("./dist/" + options.newname));
});

