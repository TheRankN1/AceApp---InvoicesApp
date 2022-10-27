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

const COMPONENTS = [
  TopbarComponent,
  DashboardComponent,
  SidenavComponent,
  UserComponent,
  ClientsComponent,
];

const MODULES = [CommonModule, DashboardRoutesModule];

@NgModule({
  declarations: [COMPONENTS, CompaniesComponent, InvoicesComponent, OffersComponent, LogsComponent, ConfigComponent, FooterComponent],
  imports: [MODULES],
  exports: [TopbarComponent],
})
export class DashboardModule {}
