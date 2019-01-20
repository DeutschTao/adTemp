var xmlreader = require("xmlreader");
var fs = require("fs");
var xml2js = require('xml2js');

  var builder = new xml2js.Builder();  // JSON->xml
  var parser = new xml2js.Parser();   //xml -> json

//   var json =  parser.parseString(xml);
//   xml =  builder.buildObject(json);


fs.readFile('./dev/template/' + process.env.pathName + '/index.xml','utf-8',function(err,result){
    xmlreader.read(result, function(errors, response){
        if(null !== errors ){
            console.log(errors)
            return;
        }
        console.log('ok');
        console.log(response)
        var xml =  builder.buildObject(response);
        console.log(xml)
        // console.log(response.VanGogh.Style.text())
    });
    // var json =  parser.parseString(result);
    // console.log(json)
    //  var xml =  builder.buildObject(json);
    // console.log(xml)

 });


