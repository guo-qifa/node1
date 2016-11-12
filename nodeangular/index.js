console.log('ssssssssssssssssssssssssxcccccccc');
/*var  clock=document.getElementById('clock');*/
function getTime() {
    var xhr=new XMLHttpRequest();
    xhr.open('get','/clock',true);

    xhr.onload=function () {
        clock.innerHTML=xhr.response;
    };

   /* xhr.onreadystatechange=function () {
        if (xhr.readyState==4 && xhr.status==200){

        }
    };*/
    xhr.send()
}
setInterval(getTime,1000);