import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Adjust the path if needed


const routes: Routes = [
 // { path: '', component: HomeComponent }, // Default route
  { path: '', component: LoginComponent },
  // ...
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
