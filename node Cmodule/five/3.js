


var buffer=new Buffer(4);
//buffer.fill(2);

//var buffer=new Buffer(6);
console.log(buffer);

var buffer=new  Buffer(6);
var  buf1=new  Buffer('珠');
var  buf2=new  Buffer('疯');

buf1.copy(buffer,0,0,3);
buf2.copy(buffer,3,0,3);
console.log(buffer.toString());

 // concat 将多个小buffuer 拼成一个大 buffer;


var  buf1=new  Buffer('珠');
var  buf2=new  Buffer('疯');
var  buf3=new  Buffer('node');


Buffer.mybuffer=function (list,totalLength) {
    if(typeof totalLength=='undefined'){
        totalLength=0;
        list.forEach(function (buf) {
            totalLength+=buf.length;
        });
    }
    var  buffer=new Buffer(totalLength);

    var index=0;
    list.forEach(function (buf) {
       buf.copy(buffer,index);
       index+=buf.length;
    });

    return buffer.slice(0,index)
};
console.log(Buffer.mybuffer([buf1,buf2,buf3],100).toString());