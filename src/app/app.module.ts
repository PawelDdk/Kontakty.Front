import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { DetailsComponent } from './pages/details/details.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { LayoutComponent } from './layout/layout.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

//materials
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    DetailsComponent,
    ContactListComponent,
  ],
  imports: [
    MatToolbarModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule,
    NgIf,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent],
  
})
export class AppModule { }
