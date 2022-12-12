import { Component, Input, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Observable } from 'rxjs';
import { ClientInterface } from '../../../shared/interfaces/client.interface';
import { MatDialog } from '@angular/material/dialog';
import { ClientsFormComponent } from '../../forms/clients-form-component/client-form.component';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.component.html',
  styleUrls: ['clients.component.scss'],
})
export class ClientsComponent {
  public clients$: Observable<ClientInterface[]> =
    this.clientsService.readClients();
  public Individual = 'Individual';

  constructor(
    private clientsService: ClientsService,
    public dialog: MatDialog
  ) {}
  openDialog() {
    const dialogRef = this.dialog.open(ClientsFormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
