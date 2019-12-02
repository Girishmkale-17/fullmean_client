import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpService } from './emp.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
