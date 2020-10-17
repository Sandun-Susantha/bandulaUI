import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-bill',
  templateUrl: './registration-bill.component.html',
  styleUrls: ['./registration-bill.component.css']
})
export class RegistrationBillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  printPage(){
    
    window.print();
  }

}
