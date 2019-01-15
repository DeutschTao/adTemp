var gulp = require('gulp'),
    rename = require('gulp-rename'),
    minimist = require('minimist'),
    runSequence = require('run-sequence'),
    rev = require('gulp-rev'),
    clean = require('gulp-clean'),
    revCollector = require('gulp-rev-collector');

var options = require('minimist')(process.argv.slice(2));


var xmlSrc = './dev/'+ options.pathName + '/*.xml';

// gulp.task('clean', function(){
//     return gulp.src('./dist/' + options.newname, {read: false})
//         .pipe(clean());
// })
gulp.task('revXml', function(){
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

// gulp.task('dev', function (done) {  
//     condition = false;  
//     runSequence(  
//         ['clean'],  
//         ['revXml'],   
//         done  
//     );  
// });

// gulp.task('default', ['dev']);
// gulp.task('runsequence', function (callback) {
//     runSequence('clean', 'revXml', callback)
// })

