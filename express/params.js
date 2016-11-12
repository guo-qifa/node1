/*
* 参数的处理；
*   请求行  method  url   (pathname +  query)
 *  请求头  header
 *  请求体  body
*
* */

var  express=require('express');
var app=express();
app.get('/',function (req,res) {
   console.log(req.method);
   console.log(req.url);
    var urlObj=url.parse(req.url,true);
    console.log(urlObj.pathname);
    console.log(urlObj.query);
});

app.get('/users/:id',function (req,res) {
    res.end('id='+ req.params.id  )
    //params 是 express帮我们添加的对象属性，属性名是就是占位符；  值是实际请求的字符串 的占位符对应的 部分；
});

app.listen(8080);