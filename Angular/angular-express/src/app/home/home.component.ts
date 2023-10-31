import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BackendAccessService } from '.././backend-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'reactive-forms';
   userList : any =[];
  // data : any;
   exresponse : string ="";
//constructor Injection
//http is the object and HttpClient is the class.
//with the help of http we will call the API's.
  constructor(private http : HttpClient,
    private baccess : BackendAccessService)
  {

  }
  getAllUser()
  {
    this.userList=this.baccess.getAllUser();
  //    this.http.get('http://localhost:9901/getAll').subscribe
  //    ((response)=>{
  //    this.userList=response;
  //    console.log(this.userList);
  // });
  }

  updateUser(udata: any)
  {
    const userid=udata.value.userid;
    this.http.put('http://localhost:9901/update/'+userid, udata.value).subscribe((response)=>{
    console.log(response);
  })}
  addUser(udata : any)
  {
    this.exresponse=this.baccess.addUser(udata);
    // console.log(udata);
    // console.log(udata.value);
    // this.userList.push(udata.value);
    // this.http.post('http://localhost:9901/insert', udata.value).
    // subscribe((response)=>{
    // console.log(response);
    // this.exresponse=response.toString();
    //  })
  }
  deleteUser(udata : any)
  {
    const userid=udata.value.userid;
    this.http.delete('http://localhost:9901/delete',{body: {userid},}).
    subscribe((response)=>{
      console.log(response);
    })
  }
}

