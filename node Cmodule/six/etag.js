/*
* MD5 加密
*   1. 不可逆
*   2. 不管多次文件 产出的长度是相同的
 *  3. 不同的内容生产MD5 肯定不同
*
* */
var crypto=require('crypto');
/*
console.log(crypto.getHashes());

/!*111 加密*!/
crypto.createHash('md5').update('12345').digest('hex');
*/


var fs=require('fs');
var http=require('http');
var server=http.createServer(function (req,res) {
    if(req.url==='/'){
        res.setHeader('Content-type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url==='/index.js'){
          var data=fs.readdirSync('./index.js');
          data=crypto.createHash('md5').update(data).digest('base64');

        var match=req.headers['if-none-match'];
        if(match&&(match==data)){
            res.statusCode='304';
            res.end('')
        }else{
            res.setHeader('Content-type','text/javascript;charset=utf8');
            res.setHeader('Etag',data);
            fs.createReadStream('./index.js').pipe(res)
        }
        var timer=fs.statSync('./index.js').ctime.toUTCString();
        var ctime=req.headers['if-modified-since'];
        if(ctime && ctime==timer){
            res.statusCode='304';
            res.end('');
        }else {
            res.setHeader('Content-type','text/javascript;charset=utf8');
            res.setHeader('Last-modified',timer);
            fs.createReadStream('./index.js').pipe(res);
        }
    }else {
        res.statusCode = 404;
        res.end('not found');
    }
});
server.listen(3003,function () {
    console.log('3003')
} );