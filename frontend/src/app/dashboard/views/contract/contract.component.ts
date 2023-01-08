import { Component, OnInit } from '@angular/core';
import { ContractService } from '../../services/contract.service';
import { ClientsFormComponent } from '../../forms/clients-form-component/client-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ContractFormComponent } from '../../forms/contract-form-component/contract-form.component';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss'],
})
export class ContractComponent {
  public contract$ = this.contractService.getContracts();

  constructor(
    public contractService: ContractService,
    private dialog: MatDialog
  ) {}

  createContract() {
    const dialogRef = this.dialog.open(ContractFormComponent, {
      data: { onEditMode: false },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
