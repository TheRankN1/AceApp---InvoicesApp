import { Component, OnInit } from '@angular/core';
import { JWTTokenService } from './modules/auth/services/jwt-token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private jwtService: JWTTokenService, private router: Router) {}

  ngOnInit() {
    if (this.jwtService.isTokenOnLocalStorage()) {
      this.jwtService.initializeToken();
    } else {
      this.router.navigate(['/login']);
    }
  }

  title = 'frontend';
}
