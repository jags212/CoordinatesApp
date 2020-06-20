import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://www.datasciencetoolkit.org/maps/api/geocode/json?sensor=false&address=';

constructor(private http: HttpClient) { }

  search(model: string) {
   return this.http.get(this.baseUrl + model);
 }
}
