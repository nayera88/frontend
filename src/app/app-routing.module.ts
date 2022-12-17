import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';

const routes: Routes =[
  {
    path:'', 
    component:FrontLayoutComponent
  },
  {path:'admin',
  component:AdminLayoutComponent,
  children:[
    {path:'', loadChildren:()=>import('./views/trips/trips.module').then(m=>m.TripsModule)},
    {path:'stations', loadChildren:()=>import('./views/stations/stations.module').then(m=>m.StationsModule)}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
