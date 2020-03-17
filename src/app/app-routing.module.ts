import { HomeComponent } from './component/home/home.component';
import { BookComponent } from './component/book/book.component';
import { AddEmployeePageComponent } from './component/add-employee-page/add-employee-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: BookComponent
  },
  {
    path: 'add-employee-page',
    component: AddEmployeePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
