import { Component } from '@angular/core';
import { AuthServices } from '../../services/auth.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ace-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent {
  public registerFormGroup: FormGroup;

  constructor(
    private authServices: AuthServices,
    private fb: FormBuilder,
    public router: Router
  ) {
    this.registerFormGroup = this.buildFormGroup();
  }

  public buildFormGroup() {
    return this.fb.group({
      username: this.fb.control('', [Validators.required]),
      fullName: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  public register() {
    this.authServices
      .register(this.registerFormGroup.value)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['/login']);
      });
  }
}
