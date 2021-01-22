import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from "./personal-details/personal-details.component";
import { HomeComponent } from "./home/home.component";
import {RegistrationBillComponent} from "./registration-bill/registration-bill.component";
import {ViewCustomerComponent} from "./view-customer/view-customer.component";
import {EditCustomerBasicsComponent} from "./edit-customer-basics/edit-customer-basics.component";
import {PaymentsFormComponent} from "./add-payments/payments-form/payments-form.component";
import {PaymentPrintComponent} from "./add-payments/payment-print/payment-print.component";
import {CustomerDummyComponent} from "./customer-dummy/customer-dummy.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'addNewCustomer',component:PersonalDetailsComponent},
  {path:'addNewCustomer/printNewCustomer',component:RegistrationBillComponent},
  {path:'searchByNic', component:ViewCustomerComponent},
  {path: 'searchByNic/editCustomerBasics', component:EditCustomerBasicsComponent},
  {path: 'searchByNic/paymentForm', component:PaymentsFormComponent},
  {path: 'searchByNic/paymentForm/addPayments', component:PaymentPrintComponent},
  {path: 'searchByNic/printDummy', component:CustomerDummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
