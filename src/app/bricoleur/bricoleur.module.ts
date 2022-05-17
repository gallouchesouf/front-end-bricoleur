import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BricoleurRoutingModule } from './bricoleur-routing.module';
import { AddBricoFormComponent } from './components/add-brico-form/add-brico-form.component';
import { BricoComponent } from './brico.component';


@NgModule({
  declarations: [AddBricoFormComponent, BricoComponent],
  imports: [
    CommonModule,
    BricoleurRoutingModule 
  ]
})
export class BricoleurModule { }
