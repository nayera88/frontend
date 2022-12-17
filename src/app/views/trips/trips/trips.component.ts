import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trip={
    Id:'',
    startTime:'',
    endTime:'',
    toStation:'',
    fromStation:''
  }

  trips:any;

  createTrip(){
    this.shared.createTrip(this.trip)
    .subscribe(
     responce=>{
       console.log(responce);
     },
     error=>{
       console.log(error);
     }
    );
  }
  getTrips(){
    this.shared.getAllTrips().subscribe(
     res=>{
       console.log(res);
       this.trips=res;
     },
     err=>{
       console.log(err);
     }
 
    );
      
   }

   deleteTrip(Id:any){
    this.shared.deleteTrip(Id)
    .subscribe(
      res=>{
        console.log(res);
        this.ngOnInit();
      },
     err=>{
      console.log(err);
     } 
    )
   }

  
  
   update(Id:any,trip:any){
    this.shared.updateTrip(Id,trip)
    .subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );
   }
   
   getTripById(Id:any ,trip:any){
    this.shared.getTripById(Id)
    .subscribe(
      res=>{
        trip=res;
      },
      err=>{
        console.log(err);
      }
    );
   }
  

 constructor( public shared:SharedService ) { }

  ngOnInit(): void {

  }

}
