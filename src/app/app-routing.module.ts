import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListComponent } from './component/data-list/data-list.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: '' , component:HomeComponent,pathMatch:'full'},
  {path: 'list' , component:DataListComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
