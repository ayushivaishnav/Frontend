import { style } from '@angular/animations';
import { Component } from '@angular/core';
//by default angular follows external css.
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:'<div style="color:brown"><b>Welcome to angular</b><u>Introduction to angular</u></div>',
  //styleUrls: ['./app.component.css'],
  //Internal style sheet.

  styles:['b{color:red}', 'div{color:black}']
})
export class AppComponent {
  title = 'first website in Angular';
  name: string='Ayushi Vaishnav';
}
