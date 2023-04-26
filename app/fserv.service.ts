import { Injectable } from '@angular/core';
import { data } from './model/model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FservService {

    constructor(private router:Router){}
  arraydata!:any
  newform:any
  // constructor() { }
  adddata(data:Array<data>,form:any){
this.arraydata=data
this.newform=form
  }
  del(i:number){
    this.arraydata.splice(i,1)
  }
  patch(i:any){
    this.newform.setValue({id:this.arraydata[i].id,name:this.arraydata[i].name,address:{state:this.arraydata[i].address.state,city:this.arraydata[i].address.city},pnum:this.arraydata[i].pnum})
    this.router.navigate(['form'])
    console.log(this.arraydata[i]);

  }
}
