import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BackendAccessService } from '../backend-access.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  exresponse : string = "";
  contactList : any =[];
  

  constructor(private http:HttpClient, 
    private bservice:BackendAccessService,
   
    ){}
  
  getAllContacts()
  {
    this.contactList = this.bservice.getAllContacts()
  }
  addContacts(cdata : any)
  {
    this.exresponse=this.bservice.addContacts(cdata);

  }
  updateContacts(cdata : any)
  {
    this.bservice.updateContacts(cdata);

  }
  deleteContacts(cdata : any)
  {
    this.bservice.deleteContacts(cdata);

  }

}
