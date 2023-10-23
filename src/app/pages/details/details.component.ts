import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl();

  email: string = '';
  hide : boolean = true;
  inputedOther: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  phone: string = '';
  dateOfBirth: string = '';

  selectedCategory: string = '';
  selectedSubCategory: string = '';

  constructor(private httpClient: HttpClient, private router: Router) {}

  getErrorMessage() {
    if (this.emailControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailControl.hasError('emailControl') ? 'Not a valid email' : '';
  }

  public onSelectedCategory(value : string) : void{
    this.selectedCategory = value;
    console.log(`category: ${this.selectedCategory}`);
  }

  public onSelectedSubCategory(value: string) : void{
    this.selectedSubCategory = value;
    console.log(`subcategory: ${this.selectedCategory}`);
  }

  public onAddContact() : void{
    let request = {
      firstName : this.firstName,
      lastName : this.lastName,
      email : this.email,
      password : this.password,
      category : this.selectedCategory,
      subcategory : this.selectedSubCategory,
      phone : this.phone,
      dateOfBirth : this.dateOfBirth,
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem("token")}`
    });

    this.httpClient.post<any>('https://localhost:7195/addContact', request, {headers}).subscribe(response=>{
      this.router.navigate(['/contact-list']);
    },
    error=> {
      console.error(error)
    })
  }
}
