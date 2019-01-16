var gulp = require('gulp'),
    rename = require('gulp-rename'),
    minimist = require('minimist'),
    runSequence = require('run-sequence'), // gulp版本需要小于4.0，否则run-sequence运行报错
    rev = require('gulp-rev'),
    clean = require('gulp-clean'),
    revCollector = require('gulp-rev-collector'),
    fs = require('fs');

var options = require('minimist')(process.argv.slice(2));

var xmlSrc = './dev/template/'+ options.pathName + '/*.xml';

gulp.task('clean', function(){ // 先删除已存在的文件
    if (fs.existsSync('./dist/' + options.pathName)) {
        return gulp.src('./dist/' + options.pathName, {read: false})
        .pipe(clean());
    }
})
gulp.task('revXml', function(){ // 将xml文件名hash化
    return gulp.src(xmlSrc)
        .pipe(rev())
        .pipe(gulp.dest('./dist/'+ options.pathName))
        .pipe(rev.manifest()) 
        .pipe(gulp.dest('./dist/'+  options.pathName));
})
    
// gulp.task('rename', function() {
//     return gulp.src(["./public/dev/index.xml", "./public/dev/index.json"])
//         .pipe(rename(function (path) {
//             path.basename = options.newname;
//           }))
//         .pipe(gulp.dest("./dist/" + options.newname));
// });


gulp.task('build', function(cb) {
    runSequence(
        'clean', 
        'revXml', 
        cb
    );
});


