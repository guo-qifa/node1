var http=require('http');
var url=require('url');
var fs=require('fs');
//在当前文件夹下 先初始化 在安装 1. npm init -y
//                           2. npm  install mime --save-dev
var mime=require('mime');
//引入 mime文件
http.createServer(function (req,res) {
    //console.log(req.url);/*  /   */
    var urlobj= url.parse(req.url,true);
    var pathname=urlobj.pathname;
    var query=urlobj.query;/*  获取到 查询的参数*/

    if(pathname=='/'){
        res.setHeader('Content-type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/clock'){
        res.end(new Date().toLocaleString())
    }else {
      fs.exists('.'+pathname,function (exists) {
      if (exists){
       res.setHeader('content-type',mime.lookup(pathname)+';charset=utf8;');
        fs.createReadStream('.'+pathname).pipe(res);
      }else {
       res.statusCode=404;
          res.end('')

      }
      })
    }



}).listen(3000,function () {
    console.log('3000')
});