import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
@Injectable({providedIn:'root'})
export class SharedService {
   
  constructor( private http:HttpClient) { }
  private url ='https://spring-boot-app-tripscheduling.apps.eu410.prod.nextcle.com/';


  createAdmin(admin:any){
    return this.http.post(this.url + 'admin/signUp' , admin);
  }

  login(admin:any){
    return this.http.post(this.url + 'admin/logIn' , admin);
  }
  
  createTrip(trip:any){
    return this.http.post(this.url + 'trip/add' , trip);
  }

  getAllStations(){
    return this.http.get(this.url+ 'station/all')
  }
  getAllTrips(){
    return this.http.get(this.url+ 'trip/all')
  }

  deleteTrip(Id:any){
    return this.http.delete(this.url+'trip/delete/'+Id)

  }
  
  getTripById(Id:any){
    return this.http.get(this.url+'trip/all/'+Id)
  }

  updateTrip(Id:any,trip:any){
    return this.http.put(this.url+'trip/update/'+Id,trip)
  }
}
