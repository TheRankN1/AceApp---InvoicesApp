import { Component, Inject } from '@angular/core';
import { AuthServices } from '../../services/auth.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ace-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  public loginFormGroup: FormGroup;
  public token: String = '';
  constructor(
    private authService: AuthServices,
    private fb: FormBuilder,
    public router: Router
  ) {
    this.loginFormGroup = this.buildFormGroup();
  }

  private buildFormGroup() {
    return this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }

  public login() {
    this.authService.login(this.loginFormGroup.value).subscribe(
      (response: any) => {
        this.token = response;
        console.log(this.token);
        console.log('Ai fost logat cu success!!');
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
