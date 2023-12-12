import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Manufacturer } from '../components/manufacturer/models/manufacturer';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  private manufacturerUrl: string = environment.apiUrl + '/manufacturer';

  constructor(private http: HttpClient) { }

  getManufacturers() {
    return this.http.get(this.manufacturerUrl);
  }

  addManufacturer(manufacturer: Manufacturer): Observable<Manufacturer> {
    const headers = { 'content-type': 'application/json'};
    return this.http.post<Manufacturer>(this.manufacturerUrl, manufacturer, {headers: headers});
  }

  deleteManufacturer(id: number) {
    return this.http.delete<any>(this.manufacturerUrl + '/' + id);
  }
}
