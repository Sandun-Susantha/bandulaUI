import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CustomerService } from '../services/customer.service'
import {ICustomers} from "../../assets/icustomers";
import {ViewCustomerService} from "../services/view-customer.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ CustomerService ]
})
export class HomeComponent implements OnInit {
  customers: ICustomers[];

  displayedColumns: string[] = ['billNu', 'customerName', 'villageName', 'cityName', 'contactNum', 'examDate', 'remainingPay', 'chargedOfficer', 'nic'];
  dataSource : MatTableDataSource<ICustomers>

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _customerService: CustomerService, private _viewService: ViewCustomerService) {}

  ngOnInit() {
    this._customerService.getCustomers().subscribe(data => this.customers = data);

    new Promise((resolve) => {
      setTimeout(() => {
        this.dataSource = new MatTableDataSource<ICustomers>(this.customers);
        resolve();
      }, 1000);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelectRaw(customer : ICustomers) {
    this._viewService.getSelectedCustomerNic(customer.nicNumber.toString())
  }
}
