import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';
import { SidenavComponent } from './components/sidebar/sidenav.component';

const COMPONENTS = [TopbarComponent, DashboardComponent, SidenavComponent];

const MODULES = [CommonModule, DashboardRoutesModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [TopbarComponent],
})
export class DashboardModule {}
