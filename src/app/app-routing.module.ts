import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ManufacturerComponent } from './components/manufacturer/components/manufacturer.component';
import { HomeComponent } from './components/home/home.component';
import { ModelComponent } from './components/model/model.component';

const routes: Routes = [
  { path: '', title: 'Home Page', component: HomeComponent },
  { path: 'home', title: 'Home Page', component: HomeComponent }, 
  { path: 'manufacturer', title: 'Manufacturers', component: ManufacturerComponent, canActivate: [AuthGuard] },
  { path: 'model', title: 'Models', component: ModelComponent, canActivate: [AuthGuard] },
  { path: '**', title: 'Login Page', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
