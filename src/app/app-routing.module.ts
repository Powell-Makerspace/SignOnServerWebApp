import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VisitsComponent } from './visits/visits.component';
import {ListGuestsComponent} from './guests/list-guests/list-guests.component';
import {AddGuestComponent} from './guests/add-guest/add-guest.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'members', component: ListGuestsComponent },
  { path: 'members/create', component: AddGuestComponent },
  { path: 'visits', component: VisitsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
