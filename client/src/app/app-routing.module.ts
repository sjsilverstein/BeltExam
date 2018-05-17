import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { PetdetailsComponent } from './petdetails/petdetails.component';


const routes: Routes = [
  { path: '',component: PetListComponent },
  { path: 'new',component: NewPetComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'edit/:id', component: EditPetComponent },
  { path: 'details/:id', component: PetdetailsComponent}
  // // the ** will catch anything that did not match any of the above routes
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
