import { Component, OnInit } from '@angular/core';
import { featureService } from '../../services/feature.service';
import { Observable } from 'rxjs';
import { FeatureInterface } from '../../../shared/interfaces/feature.interface';
import { ClientsFormComponent } from '../../forms/clients-form-component/client-form.component';
import { MatDialog } from '@angular/material/dialog';
import { FeaturesFormComponent } from '../../forms/features-form-component/features-form.component';

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
    const dialogRef = this.dialog.open(FeaturesFormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
