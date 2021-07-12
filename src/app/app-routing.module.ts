import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayElementsComponent } from './display-elements/display-elements.component';
import { ItemToUpdateComponent } from './item-to-update/item-to-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: "itemToUpdate/:id", component: ItemToUpdateComponent },
  { path: "display", component: DisplayElementsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
