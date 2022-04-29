const http = require('http');

http.createServer((req,resp)=>
{

    resp.write("hello");
    resp.end();

}).listen(4500);
