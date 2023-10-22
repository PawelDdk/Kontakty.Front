import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'contact-list', component: ContactListComponent },
  { path: 'create-contact', component: DetailsComponent },
  { path: 'edit-contact/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
