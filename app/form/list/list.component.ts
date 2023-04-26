import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FservService } from 'src/app/fserv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  arrdata:any
  constructor(private demo:FservService,private router:Router){
this.arrdata=this.demo.arraydata
  }
  index:any
  del(i:number){
    this.demo.del(i)
  }

  patch(i:number){
      this.demo.patch(i)
      // this.router.navigate(['form'])
  }
}
