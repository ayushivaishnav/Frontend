const { dir } = require('console');
var files=require('fs');
var fdesc=0

//open(<nameOfTheFile>, <ModeOFOpening>, <call-back function>)
/*Mode of opening can be:
  r-read mode
  w-write mode
  a-append mode

*/

files.open('Demo.txt','a',function(err,fd){   //Opens the file in write mode.
    if(err !=undefined){
    console.log(err.message);
    console.log(err.code);
    }else{
        console.log('File opened successfully.');
        console.log(fd);
        fdesc=fd;
    }

var str=new Buffer.from('Welcome to NodeJS\n');
console.log(fdesc);

//write(<fileNo>, <dataToBeWritten>, <startingPositionInBuffer>,
//<size>, <Encoding>| null , <callback function>)

files.write(fdesc,str,0, str.length,null, function(err,written){
    console.log('Wrote' +written+'characters to the file');
})
files.close(fdesc, function(){
    console.log('File closed successfully.')
});
});