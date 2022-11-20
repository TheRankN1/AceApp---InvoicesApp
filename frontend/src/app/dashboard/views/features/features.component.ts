import { Component, OnInit } from '@angular/core';
import { featureService } from '../../services/feature.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FeatureInterface } from '../../../shared/interfaces/feature.interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  public visible = true;
  public featureFormGroup: FormGroup;
  public feature$: Observable<FeatureInterface[]> =
    this.featureService.readFeatures();

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
  public toggleVisible() {
    this.visible = !this.visible;
  }
}
