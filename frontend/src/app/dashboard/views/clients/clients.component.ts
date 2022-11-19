import { Component, Input, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JWTTokenService } from '../../../modules/auth/services/jwt-token.service';
import { CurrentUserInterface } from '../../../shared/interfaces/current-user.interface';
import { Observable } from 'rxjs';
import { ClientInterface } from '../../../shared/interfaces/client.interface';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.component.html',
  styleUrls: ['clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  public clientsFormGroup: FormGroup;
  public currentUser!: CurrentUserInterface;
  public visible = false;
  public clients$: Observable<ClientInterface[]> =
    this.clientsService.readClients();
  public Individual = 'Individual';

  constructor(
    private clientsService: ClientsService,
    private fb: FormBuilder,
    private jwtService: JWTTokenService
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

  public toggleVisible() {
    this.visible = !this.visible;
  }

  public createClients() {
    const body = {
      ...this.clientsFormGroup.value,
      userId: this.currentUser._id,
    };

    this.clientsService
      .createClient(body)
      .subscribe((respone: { _id: string }) => {
        console.log(respone);
      });
  }
}
