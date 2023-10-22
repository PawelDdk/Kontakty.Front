import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account-service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide : boolean = true;
  password = new FormControl()
  constructor(private httpClient: HttpClient, private accountService : AccountService, private router: Router){}

  onClickLogin(){
    this.accountService.login().subscribe(
      (Data)=>{
        sessionStorage.setItem("token", Data);
        this.router.navigate(['/contact-list']);
        //przejscie na strone

      },
      (error)=>{
        console.error(error);
      },
      )
 }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
