import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';

const COMPONENTS = [TopbarComponent];

const MODULES = [CommonModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [TopbarComponent],
})
export class DashboardModule {}
