import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InbuiltDirectiveComponent } from './inbuilt-directive/inbuilt-directive.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { TdfComponent } from './tdf/tdf.component';
import { TemplateDrivenForm2Component } from './nested-template-driven-form/template-driven-form2.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ParentComponent } from './componentInteraction/parent/parent.component';
import { ChildComponent } from './componentInteraction/child/child.component';
import { OneComponent } from './componentInteraction/one/one.component';
import { TwoComponent } from './componentInteraction/two/two.component';
import { CascadingComponent } from './cascading/cascading.component';
import { CascadingPipe } from './cascading/cascading.pipe';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [  
    AppComponent, 
    FilterPipe,
    InbuiltDirectiveComponent,
    CustomDirectiveComponent,
    CustomDirectiveDirective,
    ArrayMethodsComponent,
    TdfComponent,
    TemplateDrivenForm2Component,
    ReactiveFormComponent,
    ParentComponent,
    ChildComponent,
    OneComponent,
    TwoComponent,
    CascadingComponent,
    CascadingPipe,
    ApiIntegrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
