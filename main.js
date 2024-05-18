// fs practice;
var fs= require('fs');
console.log('oppening...');
fs.open('./mode/fs.js','r+',function(err ,fd){
if(err){
    return console.error(err);

}
console.log('File open succesfully');

})
// Read a file fs.read(fd,buffer,offset,length,position,callback);

var fs2= require('fs');
var buf=new Buffer(1024);

console.log("Opening an exiting file ");
fs.open('./mode/fs.txt','r+',function(err,fd){
    if(err){
        return console.error(err);

    }
    console.log("file  opened succesfully");
    console.log('reading the file ');

    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            return
            console.error(err);
console.log(bytes + "bytes read ");
// print onlly read bytes to avoid junk;
if(bytes>0){
    console.log(buf.slice(0,bytes).toString());
}
        }
    })
})

// writing to a file  
var  fs2= require('fs');
console.log('writing into exiting file ');
fs.writeFile('./mode/new.txt','pankaj vishwakarma welcom you in the new file '
    ,function(err){
        if(err){
            return console.error('error in exiting file ');
        }
        console.log('data written successfully');
        console.log('lets read newly writen data ');
        
    }
)
var data =fs.readFileSync('./mode/new.txt');
console.log('synchronous read:'+ data.toString());

// Appending t0 a file 
var fs3= require('fs');
var data2= "\n learn node.js";
fs.appendFile('./mode/new.txt','data','utf8',function(err){
    if(err)throw err;
    console.log('data is appended to file ');
}
)

// closing file 
// fs.close(fd ,function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('file closed successfully')
// })


// DELETING TO A FILE using unlike method();
var fs32=require('fs');
console.log('deleting .....');
fs.unlink('./mode/new.txt',function(err){
    if(err){
        return console.log('error in deleting a file '+ err);

    }
    console.log('file deleted successfully!')
})