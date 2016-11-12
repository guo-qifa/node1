

var fs=require('fs');


function copy(sourse,target) {
    var rs=fs.createReadStream(sourse,{highWaterMark:4});
    var ws=fs.createWriteStream(target,{highWaterMark:1});
    
    rs.on('data',function (data) {

       var flag= ws.write(data);
        if(!flag){
            rs.pause()
        }
    });
    ws.on('drain',function () {
        rs.resume()
    });
    rs.on('end',function () {
       ws.end()
    })
}


copy('./name.txt','./name1.txt');