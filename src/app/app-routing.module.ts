import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page-1/page-1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Page2Component } from './page-2/page-2.component';
import { GraphsComponent } from './graphs/graphs.component';

const routes: Routes = [

{path:"", redirectTo:"/page-2", pathMatch:"full"},
{path:'page-1', component:Page1Component},
{path:'page-2', component:Page2Component},
{path:'graphs',component:GraphsComponent},
{path:'*', component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
