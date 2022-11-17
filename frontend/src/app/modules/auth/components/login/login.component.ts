import { Component, Inject } from '@angular/core';
import { AuthServices } from '../../services/auth.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JWTTokenService } from '../../services/jwt-token.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  public loginFormGroup: FormGroup;

  constructor(
    private authService: AuthServices,
    private fb: FormBuilder,
    private jwtService: JWTTokenService,
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
    this.authService.login(this.loginFormGroup.value).subscribe({
      next: (response) => {
        this.jwtService.setCurrentUser(response.accessToken);
        console.log('Ai fost logat cu success!!');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
