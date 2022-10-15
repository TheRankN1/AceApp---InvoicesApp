import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
