let http = require('http');
let url = require('url');
let util = require('util');

let fs = require('fs');

let server = http.createServer((req,res) => {
  //res.setHeader("Content-type","text/plain;charset=utf-8");
  //res.statusCode = 200;

  var pathname = url.parse(req.url).pathname
  console.log(pathname);
  fs.readFile(pathname.slice(1),(err,data) => {
    if(err) {
      res.writeHead(404,{
        'Content-Type':'text/html'
      });
    } else {
      res.writeHead(200,{
        'Content-Type':'text/html'
      });
      res.write(data.toString());
    }
    res.end();
  });

}).listen(3000,() => {
    console.log("success!");
  });
