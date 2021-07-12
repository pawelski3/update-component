import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ItemToUpdateComponent } from './item-to-update/item-to-update.component';
import { DisplayElementsComponent } from './display-elements/display-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemToUpdateComponent,
    DisplayElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
