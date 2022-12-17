import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  station={
    name:'',
    id:''
  }

  stations:any;

  create(){
   this.shared.getAllStations().subscribe(
    res=>{
      console.log(res);
      this.stations=res;
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
