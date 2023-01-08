import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { featureService } from '../../services/feature.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientInterface } from '../../../shared/interfaces/client.interface';
import { FeatureInterface } from '../../../shared/interfaces/feature.interface';

@Component({
  selector: 'app-features-form',
  templateUrl: './features-form.component.html',
  styleUrls: ['./features-form.component.scss'],
})
export class FeaturesFormComponent {
  public featureFormGroup: FormGroup;

  constructor(
    public featureService: featureService,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: { onEditMode: boolean; feature?: FeatureInterface }
  ) {
    this.featureFormGroup = this.formBuilder();
    this.patchForm();
  }

  public formBuilder() {
    return (this.featureFormGroup = this.fb.group({
      name: this.fb.control(''),
      unit: this.fb.control(''),
      price: this.fb.control(''),
      currency: this.fb.control(''),
    }));
  }

  private patchForm() {
    if (!this.data.feature) {
      return;
    }

    const feature = this.data.feature;

    return this.featureFormGroup.patchValue({
      name: feature.name,
      unit: feature.unit,
      price: feature.price,
      currency: feature.currency,
    });
  }

  public createFeature() {
    this.featureService
      .createFeature(this.featureFormGroup.value)
      .subscribe((response) => {});
  }
}
