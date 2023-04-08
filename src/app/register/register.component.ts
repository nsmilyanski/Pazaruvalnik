import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerUser(event: Event) {
    event.preventDefault();
    console.log("Hi from login")
  }
}
