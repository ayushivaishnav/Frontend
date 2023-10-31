var files = require('fs');
files.writeFile('Demo1.txt', 'NodeJS is asynchronus. Supports callbacks',
      
function(err, data)
{
    if(err!=undefined)
        console.log(err.message);
    else
        console.log('Write' +data+ 'to the file..');   
}
)

files.readFile('Demo1.txt', function(err, data)
{
    if(err != undefined)
       console.log(err.message)
    else
       console.log(data.toString('utf-8'));
})