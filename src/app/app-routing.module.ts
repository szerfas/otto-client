import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ManufacturerComponent } from './components/manufacturer/manufacturer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', title: 'Login Page', component: LoginComponent },
  { path: 'home', title: 'Home Page', component: HomeComponent }, 
  { path: 'manufacturer', title: 'Manufacturers', component: ManufacturerComponent, canActivate: [AuthGuard] },
  { path: '**', title: 'Login Page', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
