import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Planta } from './planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

getPlants(): Observable<Planta[]> {
  return this.http.get<Planta[]>(this.apiUrl);
}

}
