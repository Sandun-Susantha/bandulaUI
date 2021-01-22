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
import { PrintButtonComponent } from './print-button/print-button.component';
import {EditExamDate, ViewCustomerComponent} from './view-customer/view-customer.component';
import { EditCustomerBasicsComponent } from './edit-customer-basics/edit-customer-basics.component';
import { AddPaymentsComponent } from './add-payments/add-payments.component';
import { PaymentsFormComponent } from './add-payments/payments-form/payments-form.component';
import { PaymentPrintComponent } from './add-payments/payment-print/payment-print.component';
import {MatRadioModule} from "@angular/material/radio";
import { CustomerDummyComponent } from './customer-dummy/customer-dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    ToolbarComponent,
    HomeComponent,
    PrintRegisterationComponent,
    RegistrationBillComponent,
    PrintButtonComponent,
    ViewCustomerComponent,
    EditCustomerBasicsComponent,
    AddPaymentsComponent,
    PaymentsFormComponent,
    PaymentPrintComponent,
    EditExamDate,
    CustomerDummyComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatRadioModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
