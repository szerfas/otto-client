import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ManufacturerComponent } from './components/manufacturer/manufacturer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', title: 'Home Page', component: HomeComponent },
  { path: 'home', title: 'Home Page', component: HomeComponent }, 
  { path: 'manufacturer', title: 'Manufacturers', component: ManufacturerComponent, canActivate: [AuthGuard] },
  { path: '**', title: 'Login Page', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
