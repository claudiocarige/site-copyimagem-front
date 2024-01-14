import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/core/entities/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cred: Credentials = {
    email:    '',
    password: ''
  }

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  constructor(
    private route: Router,

  ) { }

  ngOnInit(): void {
  }

  login() {

  }

  validation(): boolean {
      return this.email.valid && this.password.valid;
  }
}
