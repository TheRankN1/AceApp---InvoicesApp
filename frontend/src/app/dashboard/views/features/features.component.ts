import { Component, OnInit } from '@angular/core';
import { featureService } from '../../services/feature.service';
import { Observable } from 'rxjs';
import { FeatureInterface } from '../../../shared/interfaces/feature.interface';
import { ClientsFormComponent } from '../../forms/clients-form-component/client-form.component';
import { MatDialog } from '@angular/material/dialog';
import { FeaturesFormComponent } from '../../forms/features-form-component/features-form.component';
import { ClientInterface } from '../../../shared/interfaces/client.interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  public feature$: Observable<FeatureInterface[]> =
    this.featureService.readFeatures();

  constructor(
    public featureService: featureService,
    public dialog: MatDialog
  ) {}

  createFeature() {
    const dialogRef = this.dialog.open(FeaturesFormComponent, {
      data: { onEditMode: false },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  editFeature(feature: FeatureInterface) {
    console.log(feature);

    const dialogRef = this.dialog.open(FeaturesFormComponent, {
      data: { onEditMode: true, feature },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
