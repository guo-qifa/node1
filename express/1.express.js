var express=require('express');

//app 是一个请求监听的回调函数  每当请求到来的时候 执行此函数；
var app=express();
app.use(function (err,req,res,next) {
    // 1.不体现方法名
    // 2.不看路径

    /*
    * 路由和中间件的区别和联系
    *  1/    在同一个数组中
    *  2、   漏油需要匹配 路径   中间件不需要匹配
     * 3.   中间件多了一个 next参数   他能决定是否继续
    * */
    //1 中间件 可以给 res req 赋值
    //2 中间件 可以结束响应    res.end()



    //可以吧公用的代码 写在 中间件 里面
    res.setHeader('content-type','text/plain;charset=utf8');
    //next 是一个函数 如果调用它 表示此中间件执行完毕   可以继续向下执行
    next();
   //next（'失火了'） ；里有参数时  表示出错了   括号里的 '失火了' 会传到下一个 app.use(err,req,res,next){ console.log(err)  ==> 失火了  }
});
//当客户端通过get的请求方式 访问路劲的时候
app.get('/',function (req,res) {
    res.end('首页')
});
app.get('/login',function (req,res) {
    res.end('用户登录')
});
app.post('/login',function (req,res) {
    res.end('post登录')
});
app.get('/user',function (req,res) {
    res.end('用户客户')
});
app.all('*',function (req,res) {//   all   匹配所有的方法     * 匹配所有的路径
    res.end('404');
});



//get post delete put  head   patch
app.listen(9090);

