import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'contact-list', component: ContactListComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
