//reuse calculator, printresult and IMEINo here.
//import callbacks.js. How?
//import the callbacks module and refer to it as call.

var call = require('./Callbacks');  //no need to mention .js
call.calculator(200,300,call.printResult);
