import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.services';
import { UserInterface } from '../../../shared/interfaces/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
})
export class UserComponent {
  public users$: Observable<UserInterface[]> = this.usersService.getUsers();

  constructor(private usersService: UserService) {}
}
