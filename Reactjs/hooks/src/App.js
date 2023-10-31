// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import {useState} from 'react';
// import {memo} from 'react';

function App() {
  const [visitorCount,setVisitorCount]=useState(()=> {
    const storedCount = localStorage.getItem('visitorCount');
    return storedCount ? parseInt(storedCount) : 1;
  });

 
//This arrow will execute in all the 3 phases, viz. Mounting,
//updating, unmounting phases. useEffect hook introduces all the
//3 phases for the functional component.
  useEffect(()=>{
    localStorage.setItem("visitorCount", visitorCount.toString());
    console.log("Visitor count incremented. You are a visitor #" + visitorCount);
    // setVisitorCount(visitorCount+1)
  },[visitorCount])

  //Reactjs implements an observer which observes the changes for visitorCount and if visitorCount changes, 
  //it automatically calling that function.
  
  const updateVisitorCount=()=>{
    //console.log("Visitor count incremented. You are a visitor #" + visitorCount);
    setVisitorCount(visitorCount+1);
    // console.log("Visitor count updated....");

  }

  return ( <center>
    <div className="App">
     <form>
      <input type='button' onClick={updateVisitorCount}value='Update Visitor'/><br/><br/>
      <b>You are Visitor #</b>{visitorCount}
     </form>
    </div></center>
  );}

export default App;
// export default memo(App);