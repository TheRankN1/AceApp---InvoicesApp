import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { featureService } from '../../services/feature.service';

@Component({
  selector: 'app-features-form',
  templateUrl: './features-form.component.html',
  styleUrls: ['./features-form.component.scss'],
})
export class FeaturesFormComponent {
  public featureFormGroup: FormGroup;

  constructor(public featureService: featureService, public fb: FormBuilder) {
    this.featureFormGroup = this.formBuilder();
  }

  public formBuilder() {
    return (this.featureFormGroup = this.fb.group({
      name: this.fb.control(''),
      unit: this.fb.control(''),
      price: this.fb.control(''),
      currency: this.fb.control(''),
    }));
  }
  public createFeature() {
    this.featureService
      .createFeature(this.featureFormGroup.value)
      .subscribe((response) => {});
  }
}
