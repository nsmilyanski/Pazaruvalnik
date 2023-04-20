import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form?:FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

      this.form = this.fb.group({
          email: ['',Validators.required],
          password: ['',Validators.required]
      });
  }

  ngOnInit(): void {
    this.form
  }


  registerUser(event: Event) {
    event.preventDefault();
    console.log(this.form)
    const val = this.form?.value;

    console.log(val)

    if (val.email && val.password) {
        this.authService.register(val.email, val.password)
            .subscribe(
                () => {
                    console.log("User is logged in");
                    this.router.navigateByUrl('/');
                }
            );
    }
}
}

