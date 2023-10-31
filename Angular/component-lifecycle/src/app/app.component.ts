import { Component } from '@angular/core';
import {OnInit, OnDestroy} from '@angular/core';
import { DoCheck, AfterContentChecked } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked {
   

  firstName : string = "";
   lastName  : string = "";
  ngAfterContentInit(): void {
    //Phase3 Initialization completed
    console.log("Content Initialization completed.")
  }
  ngAfterContentChecked(): void {
    //Phase4 validation 
    console.log("Content Verified/Checked.");
  }
  ngAfterViewInit(): void {
    //Phase5 view or display phase
    console.log("View initialization completed.");
    
  }
  ngAfterViewChecked(): void {
    //Phase6 view or display phase completed
    console.log("View checking completed.")
  }
  ngDoCheck(): void {
    //Phase2- Validation phase
    console.log("Overall Verification/Validation started.")
  }
  ngOnDestroy(): void {
    //Phase7
    //write the code for connecting to the backend to save the data before component gets destroyed.
    console.log("Component Destroyed at " +
      new Date());
  }
  ngOnInit(): void {
    //Phase1 - Initialization phase
    //write the code for connecting to the backend and fetch the data.
    var today = new Date();
    console.log("Component getting initialized at" + today);
  }
  title = 'component-lifecycle';
}
