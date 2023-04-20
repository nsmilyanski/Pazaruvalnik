import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUser(event: Event) {
    event.preventDefault();
    console.log(event.target)
    console.log("Hi from login")
  }
}
