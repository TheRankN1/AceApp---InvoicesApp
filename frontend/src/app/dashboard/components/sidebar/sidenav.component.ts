import { Component } from '@angular/core';
import { SidenavMock } from './sidenav.mock';

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
})
export class SidenavComponent {
  navData = SidenavMock;
  collapsed = true;
}
