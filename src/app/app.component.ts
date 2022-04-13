import { Component } from '@angular/core';
// import { type } from 'os';
// import { Script } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoApp';
  userlogin(item:any){


    document.write("<h1>Your Basic Info</h1>");

// --------------------------------------- For UserName

document.write("<b>First_Name</b>:"+item.user_name1 +"<br>");

document.write("<b>Second_Name</b>:"+item.user_name2 +"<br>");

// --------------------------------------- For UserEmail

document.write("<b>Mobile No:</b>"+item.user_mobile  +"<br>");

// --------------------------------------- For UserEmail

document.write("<b>Email:</b>"+item.user_email  +"<br>");

// --------------------------------------- For UserPassword

document.write("<b>Password:</b>"+item.user_password  +"<br>");

// --------------------------------------- For UserAge

document.write("<b>Age:</b>"+item.user_age  +"<br>");

document.write("<h1>Your Profile</h1>")

// --------------------------------------- For RadioButton


document.write("<b>Text_Message:</b>"+item.user_bio  +"<br>");

// --------------------------------------- For SelectJob

document.write("<b>Job Role:</b>"+item.user_job  +"<br>");

// --------------------------------------- For CheckBox

document.write("<b>Interest:</b>");
if(item.user_interest1==true){
document.write("Development")
}
if(item.user_interest2==true){
  document.write(" Design")
  }
  if(item.user_interest3==true){
    document.write(" Business")
    }

}
  }
