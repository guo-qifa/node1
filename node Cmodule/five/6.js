var fs=require('fs');

var person={};
var name = fs.readFile('./name.txt','utf8',function (err,data) {

    person.name=data;
});
var age = fs.readFile('./age.txt','utf8',function (err,data) {

    person.name=data;
});