import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { InbuiltDirectiveComponent } from './inbuilt-directive/inbuilt-directive.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { TdfComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [  
    AppComponent, 
    FilterPipe,
    InbuiltDirectiveComponent,
    CustomDirectiveComponent,
    CustomDirectiveDirective,
    ArrayMethodsComponent,
    TdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
