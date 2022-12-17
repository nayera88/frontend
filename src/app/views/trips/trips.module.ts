import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripsComponent } from './trips/trips.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TripsComponent
  ],
  imports: [
    CommonModule,
    TripsRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TripsModule { }
