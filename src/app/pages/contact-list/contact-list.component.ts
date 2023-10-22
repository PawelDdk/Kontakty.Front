import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/Contact';


@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
  export class ContactListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'password', 'category', 'subcategory', 'phone', 'dateOfBirth', 'edit', 'delete'];
  endpoint = " ";
  contacts : Contact[] = []

  constructor(private httpClient: HttpClient, private router: Router) {}

  //pobieranie danych
  //usuwanie -> id
  //dodawanie 
  //edycja 

  ngOnInit(): void {
    this.getContacts();
  }

  onCreate(){
    this.router.navigate(['/create-contact']);
  }

  private getContacts(){
    this.httpClient.get<Contact[]>("https://localhost:7195/getAllContacts").subscribe(response=>{
      this.contacts=response
    })
  }


  onEdit(id : string){
    console.log("edit id: " + id)
    this.router.navigate(['/edit-contact',  id]);
  }

  onDelete(id : string){
    this.httpClient.delete<any>("https://localhost:7195/deleteContact?id=" +id).subscribe(response=>{
      this.getContacts()
    })
  }

  // private getData() {
  //   this.httpClient.get<Contact[]>(this.endpoint).subscribe(response => {
  //     this.contacts = response;
  //   })
  // }

}
