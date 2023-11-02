import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { InbuiltDirectiveComponent } from './inbuilt-directive/inbuilt-directive.component';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { TdfComponent } from './tdf/tdf.component';
import { TemplateDrivenForm2Component } from './nested-template-driven-form/template-driven-form2.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ParentComponent } from './componentInteraction/parent/parent.component';
import { OneComponent } from './componentInteraction/one/one.component';
import { TwoComponent } from './componentInteraction/two/two.component';
import { CascadingComponent } from './cascading/cascading.component';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';

const routes: Routes = [
{path:'custom-directive', component:CustomDirectiveComponent},
{path:'inbuilt-directive',component:InbuiltDirectiveComponent},
{path:'array-methods',component:ArrayMethodsComponent},
{path:'tdf', component:TdfComponent},
{path:'nested-tdf', component:TemplateDrivenForm2Component},
{path:'reactiveform', component:ReactiveFormComponent},
{path:'parentToChild', component: ParentComponent}, 
{path:'one', component:OneComponent},
{path:'two', component:TwoComponent},
{path:'cascadingDropdown', component:CascadingComponent},
{path:'ApiIntegration', component:ApiIntegrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
