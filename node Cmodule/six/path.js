var path=require('path');

//获取不带后缀的文件名； 可以指定扩展名留取想要的部分
console.log( path.basename('1.min.js','.min.js') );

//获取文件的扩展名  读取最后一个 . 后的内容；
console.log(path.extname());


//必须有存在的文件  解析出路径
console.log(require.resolve('../2.js'));
//无轮存在不存在都会解析一个路径
console.log(path.resolve('../2.js'));


//拼接路径  当前文件的路径 + 自己写的
  console.log(path.join(__dirname,'a/../b'));




