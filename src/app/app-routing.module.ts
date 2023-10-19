import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { InbuiltDirectiveComponent } from './inbuilt-directive/inbuilt-directive.component';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
{path:'custom-directive', component:CustomDirectiveComponent},
{path:'inbuilt-directive',component:InbuiltDirectiveComponent},
{path:'array-methods',component:ArrayMethodsComponent},
{path:'tdf', component:TdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
