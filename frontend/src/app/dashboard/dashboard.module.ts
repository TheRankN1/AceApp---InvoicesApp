import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';

const COMPONENTS = [TopbarComponent, DashboardComponent];

const MODULES = [CommonModule, DashboardRoutesModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [TopbarComponent],
})
export class DashboardModule {}
