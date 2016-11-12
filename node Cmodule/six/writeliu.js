var  fs=require('fs');

//如果文件不存在 可创建文件      默认写入utf-8编码格式
var ws=fs.createWriteStream('./name.txt');

//ws 为可写流对象；

var  flag= ws.write('hello',function () {
    console.log('大声道')
})


console.log(flag); //表示写完后   还可不可以继续写