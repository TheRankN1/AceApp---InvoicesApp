import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';
import { SidenavComponent } from './components/sidebar/sidenav.component';
import { UserComponent } from './views/user/user.component';
import { ClientsComponent } from './views/clients/clients.component';
import { CompaniesComponent } from './views/companies/companies.component';
import { InvoicesComponent } from './views/invoices/invoices.component';
import { OffersComponent } from './views/offers/offers.component';
import { LogsComponent } from './views/logs/logs.component';
import { ConfigComponent } from './views/config/config.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../modules/auth/components/login/login.component';
import { FeaturesComponent } from './views/features/features.component';
import { ContractComponent } from './views/contract/contract.component';
import { MatButtonModule } from '@angular/material/button';
const COMPONENTS = [
  TopbarComponent,
  DashboardComponent,
  SidenavComponent,
  UserComponent,
  ClientsComponent,
];

const MODULES = [
  CommonModule,
  DashboardRoutesModule,
  ReactiveFormsModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    COMPONENTS,
    CompaniesComponent,
    InvoicesComponent,
    OffersComponent,
    LogsComponent,
    ConfigComponent,
    FooterComponent,
    FeaturesComponent,
    ContractComponent,
  ],
  imports: [MODULES],
  providers: [LoginComponent],
  exports: [TopbarComponent],
})
export class DashboardModule {}
