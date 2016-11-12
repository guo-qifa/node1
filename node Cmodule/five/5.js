function base64(str) {
    var buffer = new Buffer(str);
    //1.先将buffer里的每一个字节全部转换成2进制，拼接到一起
    //2.将整个拼接好的内容每6位 分开，前面+ 两个0
    //3.转换成10进制
    //4.去可见编码中取值



    console.log(buffer[0]); //将10进制转化成2进制
}

console.log(base64('珠峰培训'));

