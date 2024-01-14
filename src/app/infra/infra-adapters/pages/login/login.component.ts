import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/core/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  private formBuilderService = inject(FormBuilder);
  private route = inject(Router);
  private toast = inject(ToastrService);


  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  constructor() {}
  login() {
    console.log(this.password.value, this.email.value);
    this.route.navigate(['home']);
  }

  validation(): boolean {
      return this.email.valid && this.password.valid;;
  }
}
