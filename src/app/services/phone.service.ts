import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PhoneModel } from '../models/phone-model';
import { PhoneResponseModel } from '../models/phone-model-latest-response';
import { PhoneDetailsResponse } from '../models/phone-model-details';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  baseUrl: string = "https://phone-specs-api.azharimm.dev/";

  constructor(private http: HttpClient) { }

  latest(){
    return this.http.get<PhoneResponseModel>(`${this.baseUrl}latest`);
  }

  topByInterest(){
    return this.http.get<PhoneResponseModel>(`${this.baseUrl}top-by-interest`);
  }

  details(slug: string){
    return this.http.get<PhoneDetailsResponse>(`${this.baseUrl}${slug}`)
  }
}
