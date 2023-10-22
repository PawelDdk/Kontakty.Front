import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AccountService{
    private apiUrl : string = "";
    constructor(private httpClient: HttpClient){}
    
    login() : Observable<string>{
        // return this.httpClient.get<string>(`${this.apiUrl}/`) 
        return of("tekst");
     // return "mojklucz"
    }
}

