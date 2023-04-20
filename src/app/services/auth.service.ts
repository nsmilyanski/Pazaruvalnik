import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../common/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'htttp://localhost:8080/api/v1'

  constructor(private httpClient: HttpClient) { }

  getToken() {
   
  }
  register(email:string, password:string ) {
    return this.httpClient.post<RegisterRequest>(this.baseUrl + '/register', {email, password});
}
}
