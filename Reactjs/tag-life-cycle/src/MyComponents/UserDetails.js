import { Component } from "react";
import User from "./User";
import "./UserDetails.css";

//controller
class UserDetails extends Component
{
    
    constructor()
    {
        super();
        this.state={firstname: 'Unknown', address: 'Unknown',lastname:'Unknown', updateCount:0,cnt: 0,userArray:[],};
        this.updatefirstname=this.updatefirstname.bind(this);
        this.updatelastname=this.updatelastname.bind(this);
        this.updateaddress=this.updateaddress.bind(this);
        this.confirmReset=this.confirmReset.bind(this);
        this.addUser=this.addUser.bind(this);
    }
          //this function gets executed when the tag is getting loaded in mounting phase.
        // use this function to initialize the state and perform some initial tasks 
         //like DB connection or authentication.

    componentDidMount()
    {
        this.setState({firstname:'Ayushi'});
        this.setState({lastname:'Vaishnav'})
        this.setState({address:'Bulandshahr'});
        console.log('State Initialized....')
    }
    componentDidUpdate()
    {
        var today=new Date();
        //this.setState({updateCount: this.state.updateCount + 1});
        console.log('Got updated on '+
        today.getHours() + " : " + today.getMinutes() + " for " +
        this.state.updateCount + " times");
    }
    componentWillUnmount()
    {
        var today=new Date();
        console.log("Tag unmounted on" +  today.getHours() + ":" + today.getMinutes());
    }


    updatefirstname(event)
    {
        this.setState({firstname:event.target.value});
        this.setState({updateCount: this.state.updateCount +1});
        console.log(this.state.updateCount);
    }
    updatelastname(event)
    {
        this.setState({lastname:event.target.value});
        this.setState({updateCount: this.state.updateCount +1});
        console.log(this.state.updateCount);
    }
    updateaddress(event)
    {
        this.setState({address:event.target.value});
        this.setState({updateCount: this.state.updateCount +1});
    }
    confirmReset()
    {
        var v=window.confirm("Do you wish to reset the form ? yes/no");
        return v;
    }
    addUser(event)
    {
      event.preventDefault();
      
      var u = new User(this.state.firstname,this.state.lastname, this.state.address);
      this.setState((prevState)=>
        ({userArray:[...prevState.userArray,u],
            firstname:'',
            lastname:'',
            address:'',
            updateCount:prevState.updateCount+1}));

    }
    confirmDelete(index)
    {
        const updatedUserArray =[...this.state.userArray];
        updatedUserArray.splice(index,1);

        this.setState({
            userArray:updatedUserArray,
            updateCount:this.state.updateCount+1,
        });
    }
    //view
    render()
    {
        return(<center><div>
           
            <form onReset={this.confirmReset} onSubmit={this.addUser}><br/>
                <label>First Name</label><input type="text" 
                value={this.state.firstname} onChange={this.updatefirstname}/><br/><br/>
                 <label>Last Name</label><input type="text" 
                value={this.state.lastname} onChange={this.updatelastname}/><br/><br/>
                <label>Address</label><input type="text"
                 value={this.state.address} onChange={this.updateaddress}/><br/><br/>
                <input type="submit" value="Add Data" />&nbsp;
                &nbsp;<input type="reset" value="Reset" /><br /><br />
            </form>
            <table className="TableStyle">
            
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Delete</th>
                </tr>
           { this.state.userArray.map((usr,index) => (<tr key={index}>
               <td>{usr.firstname}&nbsp;</td> 
                <td>{usr.lastname}&nbsp;</td>
                <td>{usr.address}&nbsp;</td>
                <td>
                    <button onClick={() => this.confirmDelete(index)}>Delete</button>
                </td>
                </tr>
                ))}
            
          
          </table>
        </div></center> );
       
    }
}
export default UserDetails;