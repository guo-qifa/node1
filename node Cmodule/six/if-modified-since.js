var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res) {
    if(req.url==='/'){
      res.setHeadr('Content-type','text/html;charset=utf8');
      fs.createReadStream('./index.html').pipe(res);
    }else if(req.url==='/index.js'){
      var timer=fs.statSync('./index.js').ctime.toUTCString();
      var ctime=req.headers['if-modified-since'];
        if(ctime && ctime==timer ){
             res.statusCode='304';
            res.end('');
        }else {
            res.setHeadr('Last-modified',timer);
            fs.createReadStream('./index.js').pipe(res);
        }
    }else {

    }
});
server.listen(666);