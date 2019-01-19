var xmlreader = require("xmlreader");
var fs = require("fs");

fs.readFile('./dev/template/' + process.env.pathName + '/index.xml','utf-8',function(err,result){
    xmlreader.read(result, function(errors, response){
        if(null !== errors ){
            console.log(errors)
            return;
        }
        console.log('ok');
        // console.log(response.VanGogh.BizInfo.attributes())
        // console.log(response.VanGogh.Style.text())
    });
 });


