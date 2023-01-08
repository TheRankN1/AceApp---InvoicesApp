import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ClientsService } from '../../services/clients.service';
import { JWTTokenService } from '../../../modules/auth/services/jwt-token.service';
import { CurrentUserInterface } from '../../../shared/interfaces/current-user.interface';
import { ClientInterface } from '../../../shared/interfaces/client.interface';

@Component({
  selector: 'app-clients-form',
  templateUrl: 'client-form.component.html',
  styleUrls: ['client-form.component.scss'],
})
export class ClientsFormComponent {
  public clientFormGroup: FormGroup;
  public currentUser!: CurrentUserInterface;
  public Individual = 'Individual';
  public id = '';
  constructor(
    private clientsService: ClientsService,
    private fb: FormBuilder,
    private jwtService: JWTTokenService,

    @Inject(MAT_DIALOG_DATA)
    public data: { onEditMode: boolean; client?: ClientInterface }
  ) {
    this.clientFormGroup = this.formBuilder();
    this.patchForm();
  }

  ngOnInit() {
    this.currentUser = this.jwtService.getUser();
    this.getClient();
  }

  public formBuilder() {
    return (this.clientFormGroup = this.fb.group({
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

  public onSaveClientsForm() {
    this.id = this.jwtService.getUser()._id;
    this.clientsService
      .updateClient(this.clientFormGroup.value, this.id)
      .subscribe(() => {
        this.clientFormGroup.markAsPristine();
      });
  }
  getClient() {
    this.id = this.jwtService.getUser()._id;
    this.clientsService.readClientById(this.id).subscribe((response) => {
      this.clientsService.client = response;
    });
  }
  private patchForm() {
    // const { client } = this.clientsService;

    if (!this.data.client) {
      return;
    }

    const client = this.data.client;

    this.clientFormGroup.patchValue({
      name: client.name,
      entity: client.entity,
      cui: client.cui,
      cnp: client.cnp,
      city: client.city,
      country: client.country,
      address: client.address,
      zipcode: client.zipcode,
      contactPersonName: client.contactPersonName,
      phone: client.phone,
      email: client.email,
      website: client.website,
    });
  }

  public createClients() {
    const body = {
      ...this.clientFormGroup.value,
      userId: this.currentUser._id,
    };
  }
}
