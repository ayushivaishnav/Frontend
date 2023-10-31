import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstname, setFirstName] = useState('Unknown');
  const [lastname, setLastName] = useState('Unknown');
  const [agree, setAgree] = useState(false);
  const [firstnameError, setFirstNameError] = useState('');
  const [lastnameError, setLastNameError] = useState('');

  const updateFirstName = (event)=>{
    const value = event.target.value;
    setFirstName(value);
    if (value.length < 5) {
      setFirstNameError('First Name should be atleast 5 characters');
    } else {
      setFirstNameError('');
    }
  }

  const updateLastName = (event)=>{
    const value = event.target.value;
    setLastName(value);
    if (value.length < 5) {
      setLastNameError('Last Name should be atleast 5 characters');
    } else {
      setLastNameError('');
    }
  }

  const enableDisable=(event) =>{
    //checked is the property of checkbox. It contains True/False.
    if(firstname.length>=5 && lastname.length>=5){
    setAgree(event.target.checked);
  }

}
  
  return (
    <div>
   <center><form>
        Enter your first name<input type='text'
        value={firstname} onChange={updateFirstName}></input>
         <span style={{ color: 'red' }}>{firstnameError}</span><br />
        Enter your last name<input type='text' 
        value={lastname} onChange={updateLastName}></input>
        <span style={{ color: 'red' }}>{lastnameError}</span><br />

        <b>Your name is </b>{firstname}&nbsp;{lastname}<br /><br/>
        <input type="checkbox" value={agree} onChange={enableDisable}/> Agree to Terms & Conditions<br/><br/>
        

        <input type="button" value="Save" disabled={!agree} />

        {/* {
          //conditional rendering. a new feature in reactjs
          agree ? <input type="button" value="save" />:
          <input type="button" value="save" disabled/>
        } */}
        
      </form></center>   
    </div>
  );
}

export default App;
