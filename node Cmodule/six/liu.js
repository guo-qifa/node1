/*
var  fs=require('fs');
var rs = fs.createReadStream('./name.txt',{highWaterMark:1, });
console.log(rs); // rs 不是读取到的数据  而是一个可读流的对象；
              //相当于在家 按了一个水管     默认是非流动模式
// 监听 on data事件 将水管打开   fs会以最快的速度不听的发射 emit data 事件

fs.on('data',function (data) {
   console.log(data);//data 使我们需要的数据；
});

fs.on('end',function () {
    
})
*/

//流是从上到下，始终是一个
var fs = require('fs');
var rs = fs.createReadStream('./name.txt',{highWaterMark:1,start:3,end:5}); //包前又包后
//rs不是读取到的数据,而是一个可读流的对象
//相当在家里安了一个水管，默认是非流动模式
//监听on data事件将水管打开，fs会以最快的速度不停的发射emit data事件
//encoding:null 类型为buffer
//highWaterMark 64*1024 默认读取64k
var ary=[];
rs.on('data',function (data) {
    //data是我们需要的数据
     ary.push(data);
     console.log(data); //buffer转换成字符串，调用toString方法
});
rs.on('end',function () {
    //获取峰这个汉字
    console.log(Buffer.concat(ary).toString())
});

fs.on('error',function (err) {
    console.log(err)
})