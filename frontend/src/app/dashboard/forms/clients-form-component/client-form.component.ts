import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientsService } from '../../services/clients.service';
import { JWTTokenService } from '../../../modules/auth/services/jwt-token.service';
import { CurrentUserInterface } from '../../../shared/interfaces/current-user.interface';

@Component({
  selector: 'app-clients-form',
  templateUrl: 'client-form.component.html',
  styleUrls: ['client-form.component.scss'],
})
export class ClientsFormComponent {
  public clientsFormGroup: FormGroup;
  public currentUser!: CurrentUserInterface;
  public Individual = 'Individual';

  constructor(
    private clientsService: ClientsService,
    private fb: FormBuilder,
    private jwtService: JWTTokenService,
    private dialogRef: MatDialog
  ) {
    this.clientsFormGroup = this.formBuilder();
  }

  ngOnInit() {
    this.currentUser = this.jwtService.getUser();
  }

  public formBuilder() {
    return (this.clientsFormGroup = this.fb.group({
      name: this.fb.control(''),
      entity: this.fb.control(''),
      cui: this.fb.control(''),
      cnp: this.fb.control(''),
      city: this.fb.control(''),
      country: this.fb.control(''),
      address: this.fb.control(''),
      zipcode: this.fb.control(''),
      contactPersonName: this.fb.control(''),
      phone: this.fb.control(''),
      email: this.fb.control(''),
      website: this.fb.control(''),
    }));
  }

  public createClients() {
    const body = {
      ...this.clientsFormGroup.value,
      userId: this.currentUser._id,
    };
  }
}
