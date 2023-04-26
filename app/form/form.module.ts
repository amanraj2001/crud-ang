import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { FormRoutingModule } from './form-routing.module';
import { FormMainComponent } from './form-main/form-main.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    FormMainComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
