import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { Manufacturer } from '../models/manufacturer';

@Component({
  selector: 'app-add-manufacturer-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-manufacturer-dialog.component.html',
  styleUrls: ['./add-manufacturer-dialog.component.scss']
})
export class AddManufacturerDialogComponent {
  manufacturerForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required])
  });

  constructor(
    private dialogRef: MatDialogRef<AddManufacturerDialogComponent>,
    private manufacturerService: ManufacturerService
  ) {};

  ngOnInit() {

  }

  addNewManufacturer() {
    this.manufacturerService.addManufacturer(this.manufacturerForm.value as Manufacturer)
    .subscribe(manufacturer => {
      this.dialogRef.close(manufacturer);
    })
  }

  close() {
    this.dialogRef.close();
  }
}
