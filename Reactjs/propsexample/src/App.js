// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(props) {
  // console.log(process.argv[0]);
  // console.log(process.argv[1]);
  // console.log(process.argv[2]);
  // console.log("You have passed a total of "+ process.argv.length + " parameters...");
  
  var username=prompt("Enter Your name");
    if(props.name != username)
    {
    var today=new Date();
    if(today.getHours() >= Number(props.visitingTime))
    {
  return (
    <div className="App">
      <b>Welcome Mr/Ms</b>&nbsp;&nbsp;
      {props.firstName} &nbsp;
      {props.lastName}
      
    </div>
  );
}
     else
     {
      return(<div className='App'><b>Visit after {props.visitingTime} AM in your local time. Maintenance in process.</b></div>)
     }

     }
    
     else{
      return (<div className='App'><b>Hi! {props.name}Your account is blocked. 
      Please contact the administrator</b></div>)
     }

    }
export default App;
