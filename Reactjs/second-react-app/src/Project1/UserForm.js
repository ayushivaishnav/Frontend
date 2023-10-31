import {Component}from "react";
class UserForm extends Component{
    //This class must implement a function called render
     constructor(){
        super();
        //store the value of the firstName textbox into
        //firstName field in the state.
        this.state={projectname: '', managername: '', startdate: ''};
        this.updateProjectName=this.updateProjectName.bind(this);
        this.updateManagerName=this.updateManagerName.bind(this);
        this.updateStartDate=this.updateStartDate.bind(this);
     }
updateProjectName(event)
{
   console.log(event.target.value);
    this.setState({projectname:event.target.value});
}
updateManagerName(event)
{
   console.log(event.target.value);
   this.setState({managername:event.target.value});
}
updateStartDate(event)
{
   console.log(event.target.value);
   this.setState({startdate:event.target.value});
}
render()
{
  return(
<div className="formclass">
    
{/* view */}
<center><form>
    <label>Project Name</label><input type="text" name = "projectname"
    onChange={this.updateProjectName} /><br/>

    <label>Manager Name</label><input type="text" name = "managername" 
    onChange={this.updateManagerName} /><br/>

    <label>Start Date</label><input type="Date" name = "startdate" 
    onChange={this.updateStartDate} /><br/><br/>
    <input type="submit" value="Save" /><br/>
 
    <b>All Your details Are:-</b><br/>
     <label>Project Name:- {this.state.projectname}</label><br/>
    <label>Manager Name:- {this.state.managername}</label><br/>
    <label>Start Date:- {this.state.startdate}</label><br/>
    
   
</form>
</center>
</div>
 );
  }
}
export default UserForm;