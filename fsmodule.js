//reading directory

//synchronus reading of file

// const fs = require('fs');

//synchronous
    // const files = fs.readdirSync('./');
    // console.log(files);

    //convertinfg as asynchronuus using callback function
    // const files  = fs.readdir('./', function( err,files   ){
    //     if(err) console.log('error',err);
    //     else
    //     console.log('result',files);
    // })

    //*******file reading text file--readFilesync--- */
    // var fs = require('fs');
    // var data = fs.readFileSync('sample1.txt','utf8');
    // console.log(data);

    /********file reading using async function  readFilefs.readFile(path[, options], callback) */

    // var fs = require('fs');
    // fs.readFile('sample1.txt','utf8',function(err,data){
    //     if(err)throw err;
    //     console.log(data)
    // });

    //*******file writing function using  */

   

//########reading from the write file###########
 var fs = require('fs');
    fs.readFile('test.txt','utf8',function(err,data){
        if(err)throw err;
        console.log(data)
    });
// var fs = require('fs');
//     const data = new Uint8Array(Buffer.from('test.txt'));
// fs.writeFile('test.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });