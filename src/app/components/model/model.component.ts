import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ManufacturerService } from 'src/app/services/manufacturer.service';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [CommonModule,
            MatListModule,
            MatToolbarModule,
            MatIconModule,
            MatButtonModule,
            MatDialogModule,
            MatSelectModule,
            MatFormFieldModule,
            MatInputModule],
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  manufacturers: any;
  selectedManufacturer: number | undefined;

  constructor(
    private manufacturerService: ManufacturerService,
    )
  {};

  ngOnInit() {
    this.getManufacturers();
  }

  getManufacturers() {
    this.manufacturerService.getManufacturers().subscribe({
      next: (response) => {
        this.manufacturers = response;      
      },
      error: (error) => { console.log(error);}
    })
  }

  manufacturerSelected(event: any) {
    if (this.selectedManufacturer) {
      console.log(this.selectedManufacturer);
    }
  }

  addModelDialog() {
    // const addDialogRef = this.dialog.open(AddManufacturerDialogComponent);

    // addDialogRef.afterClosed().subscribe(result => {
    //   this.getManufacturers();
    // });
  }

}
