import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CustomerService } from '../services/customer.service'
import { ICustomers} from "../services/icustomers";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ CustomerService ]
})
export class HomeComponent implements OnInit {
  customers: ICustomers[];
  allCustomers : [];

  displayedColumns: string[] = ['billNu', 'customerName', 'villageName', 'cityName', 'contactNum', 'examDate', 'remainingPay', 'nic'];
  dataSource = new MatTableDataSource<ICustomers>(this.customers);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _customerService: CustomerService) {}

  ngOnInit() {
    this._customerService.getCustomers().subscribe(data => this.customers = data);

    new Promise((resolve) => {
      setTimeout(() => {
        this.dataSource = new MatTableDataSource<ICustomers>(this.customers);
        resolve();
      }, 1000);
    });
  }
}
