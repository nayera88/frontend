import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { StationsComponent } from './stations/stations.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StationsComponent
  ],
  imports: [
    CommonModule,
    StationsRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class StationsModule { }
