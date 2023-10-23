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
  password = new FormControl()
  hide : boolean = true;
  
  constructor(private httpClient: HttpClient, private accountService : AccountService, private router: Router){}

  onClickLogin(){
    let userEmail = this.email.value ?? ''
    let userPassword = this.password.value ?? ''

    let result = false;

    this.accountService.login(userEmail, userPassword).subscribe(resposne => {
        sessionStorage.setItem("token", resposne);
        this.router.navigate(['/contact-list'])
    },
    error => {
      console.error("This user not exist")
    }) 
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
