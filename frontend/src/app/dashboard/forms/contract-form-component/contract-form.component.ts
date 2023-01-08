import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-contract-form-component',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss'],
})
export class ContractFormComponent {
  public contractFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contractService: ContractService
  ) {
    this.contractFormGroup = this.formBuilder();
  }

  public formBuilder() {
    return (this.contractFormGroup = this.fb.group({
      no: this.fb.control(''),
      issuedAt: this.fb.control(''),
    }));
  }
  public createContract() {
    this.contractService
      .createContract(this.contractFormGroup.value)
      .subscribe((response) => {});
  }
}
