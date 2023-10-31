// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route}from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Registration from './Registration';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Routes>
          {/* <Route path="/" element={<Dashboard/>}/> */}
            <Route path="home" element={<Home/>}/>
            <Route path="contactus" element={<ContactUs/>}/>
            <Route path="aboutus" element={<AboutUs/>}/>
            <Route path="registration" element={<Registration/>}/>  
       </Routes>
     <div>
            {/* <Link to="/">Dashboard</Link> &nbsp;&nbsp; */}
            <Link to="/Home" >Home</Link> &nbsp;&nbsp;
            <Link to="/ContactUs">Contact us</Link>&nbsp;&nbsp;
            <Link to="/AboutUs">About us</Link>&nbsp;&nbsp;
            <Link to="/Registration">Registration</Link> &nbsp;&nbsp;
     </div><br />
     
     </BrowserRouter>
    </div>
  );
}

export default App;
