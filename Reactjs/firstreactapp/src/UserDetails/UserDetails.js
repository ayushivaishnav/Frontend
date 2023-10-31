import { Component } from "react";
//Model
class UserDetails extends Component{
    //This class must implement a function called render
     constructor(){
        super();
        //store the value of the firstName textbox into
        //firstName field in the state.
        this.state={firstName: 'Unknown', lastName: 'Unknown'};
        this.updateFirstName=this.updateFirstName.bind(this);
        this.updateLastName=this.updateLastName.bind(this);
     }
//controller
     updateFirstName(event)
     {
        console.log(event.target.value);
         this.setState({firstName:event.target.value});
     }
     updateLastName(event)
     {
        console.log(event.target.value);
        this.setState({lastName:event.target.value});
     }
     render()
    {
      return(
        <div className="formclass">
            {/* view */}
    <center><form>
                <label>first Name</label><input type="text" name = "firstName"
                onChange={this.updateFirstName} /><br/>
                <label>Last Name</label><input type="text" name = "lastName" 
                onChange={this.updateLastName} /><br/>
                <input type="submit" value="Save" />
                <b>Your full name. Mr/Ms</b>
                <label>{this.state.firstName}&nbsp;&nbsp;
                {this.state.lastName}
                </label>
               
            </form>
            </center>
        </div>
      );
    }
}
export default UserDetails;