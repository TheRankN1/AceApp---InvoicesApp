import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './views/user/user.component';
import { ClientsComponent } from './views/clients/clients.component';
import { CompaniesComponent } from './views/companies/companies.component';
import { InvoicesComponent } from './views/invoices/invoices.component';
import { OffersComponent } from './views/offers/offers.component';
import { LogsComponent } from './views/logs/logs.component';
import { ConfigComponent } from './views/config/config.component';
import { FeaturesComponent } from './views/features/features.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'users',
        component: UserComponent,
      },
      {
        path: 'clients',
        component: ClientsComponent,
      },
      {
        path: 'features',
        component: FeaturesComponent,
      },
      {
        path: 'companies',
        component: CompaniesComponent,
      },
      {
        path: 'invoices',
        component: InvoicesComponent,
      },
      {
        path: 'offers',
        component: OffersComponent,
      },
      {
        path: 'logs',
        component: LogsComponent,
      },
      {
        path: 'config',
        component: ConfigComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutesModule {}
