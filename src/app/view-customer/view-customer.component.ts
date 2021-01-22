import {Component, Inject, OnInit} from '@angular/core';
import { ICustomers } from "../../assets/icustomers";
import {ViewCustomerService} from "../services/view-customer.service";
import * as moment from "moment";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {DOCUMENT} from "@angular/common";
export const MY_FORMATS = {
  parse: {
    dateInput: ['l', 'LL'],
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export interface UpdatedExamData {
  updatedExamDate: string;
  oldExamDate: string;
}

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit {
  selectedCustomer : ICustomers
  birthday: string
  afterPayment: boolean
  updatedExamDate: string;
  oldExamDate: string;
  oldLicenseDate: string

  constructor(private _viewService: ViewCustomerService, public updateExam: MatDialog) { }

  ngOnInit(): void {
    this._viewService.getByNicCall().subscribe(selectedCustomer => this.selectedCustomer = selectedCustomer);

    new Promise((resolve) => {
      setTimeout(() => {
        this.birthday=moment(this.selectedCustomer?.birthDay).format('YYYY-MM-DD')
        if (this.selectedCustomer?.paymentsDetailsEntitySet.length.valueOf()>0){
          this.afterPayment=true
          this.oldLicenseDate = moment(this.selectedCustomer?.licenDate).format('YYYY-MM-DD')
          this.updatedExamDate = moment(this.selectedCustomer?.writtenExamDetailsE1ntitySet[this.selectedCustomer?.writtenExamDetailsE1ntitySet.length.valueOf()-1].examDate).format('YYYY-MM-DD')
        }
        resolve();
      }, 2000);
    });
  }

  editExam(): void {
  const dialogRef = this.updateExam.open(EditExamDate, {
    width: '300px',
    data: {oldExamDate: this.oldExamDate, updatedExamDate: this.updatedExamDate}
  });

    dialogRef.afterClosed().subscribe(
    result => this.updatedExamDate = moment(result).format('YYYY-MM-DD'));
  }

}

@Component({
  selector: 'edit-exam-date',
  templateUrl: 'edit-exam-date.html',
})
export class EditExamDate{

  selectedCustomer : ICustomers
  examCtrl= new FormControl()

  constructor(public dialogRef: MatDialogRef<EditExamDate>, @Inject(MAT_DIALOG_DATA) public data: UpdatedExamData, private _viewService: ViewCustomerService) {
  }

  ngOnInit(): void {
    new Promise((resolve) => {
      setTimeout(() => {
        this._viewService.getByNicCall().subscribe(selectedCustomer => this.selectedCustomer = selectedCustomer);
        // this.examCtrl.setValue(moment(this.selectedCustomer?.writtenExamDetailsE1ntitySet[this.selectedCustomer?.writtenExamDetailsE1ntitySet.length.valueOf() - 1]?.examDate).format('YYYY-MM-DD'))
        console.log(this.selectedCustomer?.writtenExamDetailsE1ntitySet[this.selectedCustomer?.writtenExamDetailsE1ntitySet.length.valueOf() - 1]?.examDate)
        resolve();
      }, 2000);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onUpdateDate(){
    this._viewService.updateExamDate(
      "{"+"\"nic\":\""+this.selectedCustomer?.nicNumber.toString()+"\",\"oldExamDate\":\""+this.selectedCustomer?.writtenExamDetailsE1ntitySet[this.selectedCustomer?.writtenExamDetailsE1ntitySet.length.valueOf()-1].examDate+"\",\"newExamDate\":\""+moment(this.data.updatedExamDate).format('YYYY-MM-DD')+"\""+"}"
    ).subscribe(
      response=> console.log('exam updated'),
      error=> console.log('Error.! '+ error)
    )
  }
}



