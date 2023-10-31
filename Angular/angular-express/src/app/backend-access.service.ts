import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  userList:any=[];
  contactList:any=[];
  data: any;
  exresponse:string="";
 
  constructor(private http:HttpClient){
  }
  getAllUser(){
    this.http.get('http://localhost:9901/getAll').subscribe((response)=>
    {
      this.userList=response;
      console.log(this.userList)
    });
    return this.userList;
 
  }
  updateUser(udata:any){
    const userid=udata.value.userid;
    this.http.put('http://localhost:9901/update/'+userid,udata.value).subscribe((response)=>
    {
      console.log(response)
    });
  }
 
  addUser(udata:any):any{
    // console.log(udata)
    // console.log(udata.value)
    // this.userList.push(udata.value);
   
    this.http.post('http://localhost:9901/insert',udata.value).subscribe((response)=>{
      this.exresponse=response.toString();
     
    });
    return this.exresponse;

  }

    

  deleteUser(udata: any) {
    const userid = udata.value.userid;
    this.http.delete('http://localhost:9901/delete', {body: { userid },}).subscribe((response) => {
        console.log(response);
      });
  }
 
  //For Contacts
  getAllContacts(){
    this.http.get('http://localhost:9901/getAllContacts').subscribe((response)=>
    {
      this.contactList=response;
      console.log(this.contactList)
    });
    return this.contactList;
 
  }
  updateContacts(cdata:any){
    const sNo=cdata.value.sNo;
    this.http.put('http://localhost:9901/updateContacts/'+sNo,cdata.value).subscribe((response)=>
    {
      console.log(response)
    });
  }
 
  addContacts(cdata:any):any{
 
    this.http.post('http://localhost:9901/insertContacts',cdata.value).subscribe((response)=>{
      this.exresponse=response.toString();
     
    });
    return this.exresponse;
  }
  deleteContacts(cdata: any) {
    const sNo = cdata.value.sNo;
    this.http.delete('http://localhost:9901/deleteContacts', {body: { sNo },}).subscribe((response) => {
        console.log(response);
      });
    }}
    