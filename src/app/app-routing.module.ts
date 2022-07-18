import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { RecipepageComponent } from './recipepage/recipepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
},
{
    path: 'recipepage',
    component: RecipepageComponent
},
{
    path: 'contactpage',
    component: ContactpageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
