import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule , FormsModule } from '@angular/forms';
import { PrintRegisterationComponent } from './print-registeration/print-registeration.component';
import { HttpClientModule} from "@angular/common/http";
import { RegistrationBillComponent } from './registration-bill/registration-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    ToolbarComponent,
    HomeComponent,
    PrintRegisterationComponent,
    RegistrationBillComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
