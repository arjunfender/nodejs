const http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.write('hello world');
    res.end("welcome send");
}).listen(8080);//port used for server cnnection ,open localhost 8080 port


var ser = http.createServer(function(req,res){

})
console.log(ser.);