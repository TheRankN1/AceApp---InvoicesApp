import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyInterface } from '../../../shared/interfaces/company.interface';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent {
  public configFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private configService: ConfigService) {
    this.configFormGroup = this.formBuilder();
  }

  public formBuilder() {
    return (this.configFormGroup = this.fb.group({
      batchNumbers: this.fb.control(''),

      ron: this.fb.control(''),
      euro: this.fb.control(''),
      usd: this.fb.control(''),

      // company: this.fb.control(''),
    }));
  }
  public createConfigs() {
    const body = this.configFormGroup.value;

    this.configService.createConfig(body).subscribe((respone) => {
      console.log(respone);
    });
  }
}
