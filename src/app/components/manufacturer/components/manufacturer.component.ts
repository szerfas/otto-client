import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddManufacturerDialogComponent } from './add-manufacturer-dialog.component';
import { ConfirmDialogComponent } from 'src/core/components/confirm-dialog/confirm-dialog.component';
import { Manufacturer } from '../models/manufacturer';

@Component({
  selector: 'app-manufacturers',
  standalone: true,
  imports: [CommonModule, MatListModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.scss']
})
export class ManufacturerComponent {
  manufacturers: any;
  
  constructor(
    private http: HttpClient,
    private manufacturerService: ManufacturerService,
    public auth: AuthService,
    public dialog: MatDialog
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

  addManufacturerDialog() {
    const addDialogRef = this.dialog.open(AddManufacturerDialogComponent);

    addDialogRef.afterClosed().subscribe(result => {
      this.getManufacturers();
    });
  }

  deleteManufacturer(manufacturer: Manufacturer) {
    const delDialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Do you want to delete ' + manufacturer.name + '?'
      }
    });

    delDialogRef.afterClosed().subscribe(result => {
      if (result && manufacturer.id) {
        console.log('Delete ' + manufacturer.name);
        this.manufacturerService.deleteManufacturer(manufacturer.id).subscribe(
          (response) => {
            this.getManufacturers();
          }
        )
      }
    })
  }
}
