import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {
   
  user={
    userName:'',
    email:'',
    password:'',
    phone:'',

  }

  create(){
   this.shared.createAdmin(this.user)
   .subscribe(
    res=>{
      console.log(res);
    },
    err=>{
      console.log(err);
    }
   );
  }

  login(){
    
    this.shared.login(this.user)
   .subscribe(
    res=>{
      console.log(res);
      
    },
    err=>{
      console.log(err);
    }
   );
  }

 
  constructor(public shared:SharedService) { }

  ngOnInit(): void {
  }

}
