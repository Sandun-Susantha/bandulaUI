import { Component, OnInit } from '@angular/core';
import { ICustomers } from "../../assets/icustomers";
import {ViewCustomerService} from "../services/view-customer.service";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  selectedCustomer : ICustomers[];

  apiGetByNic : string
  getByNic : string

  constructor(private _viewService: ViewCustomerService) { }

  ngOnInit(): void {

    this._viewService.getByNicCall().subscribe(data => this.selectedCustomer = data);
    this._viewService.currentSelectedNic.subscribe(apiGetByNic => this.apiGetByNic = apiGetByNic)

    console.log("apiGetByNic "+this.apiGetByNic)

    new Promise((resolve) => {
      setTimeout(() => {

      /*  this._viewService.getByNicCall().subscribe(data => this.selectedCustomer = data);
        this._viewService.currentSelectedNic.subscribe(getByNic=>getByNic)
        console.log('view comp '+this.getByNic)
        console.log('view com '+this.selectedCustomer)*/

        resolve();
      }, 8000);
    });
  }
}
