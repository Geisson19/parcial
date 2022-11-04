import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root',
})
export class CafeService {
  constructor(private http: HttpClient) {}

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(environment.baseUrl);
  }
}
