import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { AccountService } from 'src/services/account-service';


@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
  export class ContactListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'password', 'category', 'subcategory', 'phone', 'dateOfBirth', 'delete'];
  contacts : Contact[] = []
  isLoged : boolean = false;

  constructor(private httpClient: HttpClient, private router: Router, private accountService : AccountService) {}

  ngOnInit(): void {
    this.getContacts();
    this.isLoged = this.accountService.isLoged()
  }

  onCreate(){
    this.router.navigate(['/create-contact']);
  }

  private getContacts(){
    this.httpClient.get<Contact[]>("https://localhost:7195/getAllContacts").subscribe(response=>{
      this.contacts=response
    })
  }

  onDelete(id : string){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem("token")}`
    });

    this.httpClient.delete<any>("https://localhost:7195/deleteContact?id=" +id, { headers }).subscribe(response=>{
      this.getContacts()
    })
  }

  public onLogin(){
    this.router.navigate(['/login']);
  }

  public onLogout(){
    sessionStorage.removeItem("token");
    this.isLoged = this.accountService.isLoged()
  }
}
