import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRapportComponent } from './list-rapport/list-rapport.component';
import { RapportComponent } from './rapport/rapport.component';
import { HomeComponent } from './home/home.component';
import { NewRapportComponent } from './new-rapport/new-rapport.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'releves', component : ListRapportComponent},
  {path: 'rapport/:id', component : RapportComponent},
  {path: 'AddRapport', component : NewRapportComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
