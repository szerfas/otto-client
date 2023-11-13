import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-manufacturers',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.scss']
})
export class ManufacturerComponent {
  isAuthenticated = false;
  
  constructor(
    private http: HttpClient,
    private manufacturerService: ManufacturerService,
    public auth: AuthService
    )
  {
      this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
          this.isAuthenticated = isAuthenticated
        });
      this.getManufacturers();
  };
  
  manufacturers: any;
  
  getManufacturers() {
    this.manufacturerService.getManufacturers().subscribe(
      (response) => {
        this.manufacturers = response;
      },
      (error) => { console.log(error);}
    )
  }
}
