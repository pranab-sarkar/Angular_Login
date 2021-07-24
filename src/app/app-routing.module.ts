import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "/login"},
  {path: 'login' , component: LoginComponent},
  {path: '' , component: HomeComponent, children: [
    {
      path:'home',
      component: HomeComponent
    },
  ]},
  {path: 'student-create' , component: StudentCreateComponent},
  {path: 'student-list' , component: StudentListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
