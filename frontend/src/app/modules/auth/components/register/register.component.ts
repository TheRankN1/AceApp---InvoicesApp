import { Component } from '@angular/core';
import { AuthServices } from '../../services/auth.services';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'ace-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent {
  public registerFormGroup: FormGroup;

  constructor(private authServices: AuthServices, private fb: FormBuilder) {
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
      });
  }
}
