import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyInterface } from '../../../shared/interfaces/company.interface';
import { ConfigService } from '../../services/config.service';
import { Observable } from 'rxjs';
import { ConfigInterface } from '../../../shared/interfaces/config.interface';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent {
  public configFormGroup: FormGroup;

  public configs$: Observable<ConfigInterface[]> =
    this.configService.getConfigs();

  constructor(private fb: FormBuilder, private configService: ConfigService) {
    this.configFormGroup = this.formBuilder();
  }

  public formBuilder() {
    return (this.configFormGroup = this.fb.group({
      batchNumbers: this.fb.control(''),
      iban: this.fb.group({
        ron: this.fb.control(''),
        euro: this.fb.control(''),
        usd: this.fb.control(''),
      }),

      company: this.fb.control(null),
    }));
  }
  public createConfigs() {
    const body = this.configFormGroup.value;

    this.configService.createConfig(body).subscribe((respone) => {
      console.log(respone);
    });
  }
}
