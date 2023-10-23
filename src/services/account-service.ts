import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AccountService{
    constructor(private httpClient: HttpClient){}
    
    login(email: string, password: string) : Observable<any> {
      let request = {
        email: email,
        password: password
      }

      return this.httpClient.post('https://localhost:7195/login', request, {responseType: 'text'})
    }

    isLoged() : boolean {
      return sessionStorage.getItem("token") == null ? false : true;
    }
}