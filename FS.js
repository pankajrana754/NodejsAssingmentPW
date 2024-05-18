// this is the practice of file system module chapter;\
/*
var fs=require('fs');
fs.readFile('./mode/fs.txt',function(err,data){
    if(err){
        return console.error(err);

    }
    console.log('Asynchronous read:'+data.toString());

})
*/
// Synchronous Read;

var fs= require('fs');
var data=fs.readFileSync('./mode/fs.txt');
console.log('synchronous read:'+ data.toString());

//opening a file:
// methos is fs.open(path,flags, mode,callback)
//path:it hold the name of the file to read 
//flag :flags inidcate the behavior of the file to be opened .all posible values are (r,r+,rs,rs+,w,wx,w+,wx+,a,ax,a+,ax+)
//mode:sets the mode of file i.e r-read,w-write,r+-readwrite.
//err:if any error occurs
//data: contets of the file. it is called afater the open o[eration is excuted

