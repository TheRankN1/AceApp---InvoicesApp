import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutesModule } from './modules/auth/auth.routes';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutesModule } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthRoutesModule,
    DashboardModule,
    AuthModule,
    AppRoutesModule,
    AuthRoutesModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
