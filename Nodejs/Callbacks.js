function printResult(res)
{
    console.log('Result->' +res);
}
function calculator(val1, val2, printResult)
{
  var res = val1 + val2;
  printResult(res);
}

calculator(100,200, printResult);
 
var  IMEINO=123456789;
// How to reuse the functions in another program?
// ->use module.exports to export all the reusable functions and the resusable 

module.exports = {calculator, printResult, IMEINO};
//callback is a function that is executed in the background automatically by another function.
//a function can take another function as the parameter and execute it in the background.