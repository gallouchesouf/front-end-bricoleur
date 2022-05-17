import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BricoComponent } from './brico.component';
import { AddBricoFormComponent } from './components/add-brico-form/add-brico-form.component';

const routes: Routes = [
  {path: "",
  component : BricoComponent,
children :[
{ path :"add" ,component:AddBricoFormComponent}, 
{ path :"" ,component:AddBricoFormComponent}, 
{ path :"**" ,component:AddBricoFormComponent} 


]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BricoleurRoutingModule { }
