import { Component, Input, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Observable } from 'rxjs';
import { ClientInterface } from '../../../shared/interfaces/client.interface';
import { MatDialog } from '@angular/material/dialog';
import { ClientsFormComponent } from '../../forms/clients-form-component/client-form.component';
import { JWTTokenService } from '../../../modules/auth/services/jwt-token.service';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.component.html',
  styleUrls: ['clients.component.scss'],
})
export class ClientsComponent {
  public clients$: Observable<ClientInterface[]> =
    this.clientsService.readClients();
  public Individual = 'Individual';
  public id = '';
  constructor(
    private clientsService: ClientsService,
    public dialog: MatDialog
  ) {}
  createClient() {
    const dialogRef = this.dialog.open(ClientsFormComponent, {
      data: { onEditMode: false },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editClient(client: ClientInterface) {
    console.log(client);
    // this.clientsService.client = client;

    const dialogRef = this.dialog.open(ClientsFormComponent, {
      data: { onEditMode: true, client },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
