import { Component } from '@angular/core';
import { UserData } from './UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Udata : UserData = new UserData();
  usersList : UserData[] = []; //Array of UserData objects
  title = 'bindings';
  themeName : string='ocean';
  colorName : string='';
      size  : number= 100;
  enableDisable: boolean = false;
  stateName : string ="UP";

  saveData(event : Event)
  {
    this.usersList.push(this.Udata);
    console.log('Added data to the array...');
    console.log(this.Udata);
    this.Udata = new UserData();
  }
  checkData()
  {
    // console.log(event.target);
    console.log(this.Udata.firstName.length);
  }
  sendData()
  {
    console.log("Sending Data to express backend.")
    //code for communicating with the backend
    //code for final validation
  }
}
