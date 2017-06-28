var http = require('http');

var sever=http.createServer(function(req,res){

res.writeHead(200,{'Content-Type':'text/plain'});

res.end('Hello node\n');

})
sever.listen(8081,'127.0.0.1');

console.log('Server running at http://127.0.0.1:8081');