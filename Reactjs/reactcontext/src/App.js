// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import { createContext, useState } from 'react';
import  UserInfo from './UserInfo';
import { UserAccount } from './UserAccount';

//common memory area that is accessed by multiple pages.
export const sharedData=createContext();
function App() {

  const [firstName, setFirstName]= useState('');
  const [lastName, setLastName]= useState('');
  const [agree, setAgree]=useState(false);
  const [showUserAccount, setShowUserAccount] = useState(false); 

  const updateFirstName=(event)=>{
    setFirstName(event.target.value);
  }

  const updateLastName=(event)=>{
    setLastName(event.target.value);
  }

  const updateAgree=(event)=>{
    setAgree(event.target.checked);
     // Show the user account when "Agree" is checked
     setShowUserAccount(event.target.checked);
  }

  return (
    //Mention what data has to be shared. 
    //Also mention the page or the component with which the data has to be shared.

    <div className="App">
     
      First Name <input type="text" value={firstName} onChange={updateFirstName} /><br/>
      Last Name <input type="text" value={lastName} onChange={updateLastName} /><br /> 
      <input type="checkbox" onChange={updateAgree} />Agree to T&C

      <sharedData.Provider value={firstName + " " + lastName}>
      {agree ? <UserInfo />: ""}
      {showUserAccount && <UserAccount />}

     </sharedData.Provider>
    </div>
  );
}

export default App;
