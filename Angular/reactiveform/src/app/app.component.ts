import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform';
  userList : any = [];
  // valid is a built in property of form. If all the validations has passed, then valid will be true
  //else false.
  addUser()
  {
      this.userList.push(this.userForm.value);
      // console.log(this.userForm.value);
      this.userForm.reset();  
  }
  Delete(index: number) 
  {
    this.userList.splice(index, 1)
  }

  Update() {
    const updatedUser = this.userForm.value;
    const index = this.userList.findIndex((user:any) => user.firstName === updatedUser.firstName);
  
    if (index !== -1) {
      this.userList[index] = updatedUser;
      console.log("User updated");
      this.userForm.reset();
    } else {
      console.log("User not found.");
    }
  }
//FormGroup represent the form.
//FormControl represents input items in the form.
//min and max used for numeric field.
//required is used for mandatory fields.
  userForm : any = new FormGroup
   ({
       firstName : new FormControl(' ',[Validators.minLength(5), Validators.maxLength(50), Validators.required]),
       lastName : new FormControl(' ',[Validators.minLength(5), Validators.maxLength(50)]),
       joinDate : new FormControl('03-01-2020',[Validators.required]),
       salary : new FormControl('Unknown',[Validators.minLength(30000), Validators.maxLength(1000000), Validators.required])
    },
    {
      //updateOn -> when validation should happen.
      //updateOn can only be change, blur and submit.
      updateOn: 'change'
    }
    );
}
