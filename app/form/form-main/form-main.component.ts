import { Component } from '@angular/core';
import { FormGroup,FormControl,FormArray } from '@angular/forms';
import { FservService } from 'src/app/fserv.service';
import { data } from 'src/app/model/model';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css']
})
export class FormMainComponent {

  arr:Array<data>=[]
      form=new FormGroup({
        id:new FormControl(),
        name:new FormControl(),
        address:new FormGroup({
          state :new FormControl(),
          city:new FormControl()
        }),
        pnum:new FormControl(),
        // relation:new FormArray([new FormGroup({
        //   relation1:new FormControl(),
        //   relation2:new FormControl()
        // })])
      });

      constructor(private demo: FservService){

      }

      // get rel(){
      //   // return this.form.get('relation') as FormArray
      // }

      add(){
        this.arr.push({id:this.form.value.id,name:this.form.value.name,address:{state:this.form.value.address?.state,city:this.form.value.address?.city},pnum:this.form.value.pnum/* relation:[...this.rel.value] */})
        console.log(this.arr);
        // adddata(this.arr)
        this.demo.adddata(this.arr,this.form)

      }

}
