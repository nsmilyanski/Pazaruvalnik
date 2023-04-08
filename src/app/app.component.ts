import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pazaruvalnik';

  logOut(event: Event) {
    event.preventDefault();
    console.log('Log out success')
  }

}

