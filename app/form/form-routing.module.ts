import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMainComponent } from './form-main/form-main.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'form',component:FormMainComponent},
  {path:'list',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
