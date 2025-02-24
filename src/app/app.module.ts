import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecipepageComponent } from './recipepage/recipepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { IngredientlistComponent } from './ingredientlist/ingredientlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RecipepageComponent,
    ContactpageComponent,
    IngredientlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
