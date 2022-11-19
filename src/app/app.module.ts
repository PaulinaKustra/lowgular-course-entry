import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EmployeesFacesComponentModule} from "./ui/employees-faces/employees-faces.component-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    BrowserAnimationsModule,
    EmployeesFacesComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
