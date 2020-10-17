import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['billNu', 'fullName', 'contactNum', 'examDate', 'examMarks', 'trailDate', 'trailStatus', 'remainingPay', 'nic'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  nic:string;
  fullName: string;
  contactNum: string;
  billNu: string;
  examDate: string;
  examMarks: number;
  trailDate:string;
  trailStatus:string;
  remainingPay: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {billNu: 'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Hydrogen', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay:'3500/='},
  {billNu: 'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Helium', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay: '3500/='},
  {billNu: 'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Lithium', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay: '3500/='},
  {billNu: 'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Beryllium', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay: '3500/='},
  {billNu: 'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Boron', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay:'3500/='},
  {billNu: 'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Carbon', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay:'3500/='},
  {billNu: 'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Nitrogen', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay:'3500/='},
  {billNu: 'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Oxygen', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay:'3500/='},
  {billNu: 'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Fluorine', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay:'3500/='},
  {billNu:  'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Neon', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay: '3500/='},
  {billNu:  'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Sodium', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay: '3500/='},
  {billNu:  'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Magnesium', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay: '3500/='},
  {billNu:  'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Aluminum', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay: '3500/='},
  {billNu:  'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Silicon', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay: '3500/='},
  {billNu:  'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Phosphorus', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay:'3500/='},
  {billNu:  'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Sulfur', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay:'3500/='},
  {billNu:  'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Chlorine', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay: '3500/='},
  {billNu:  'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Argon', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay: '3500/='},
  {billNu:  'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Potassium', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay:'3500/='},
  {billNu:  'B3500' , nic:'917072558V', contactNum:'0715933656', fullName: 'Dimuth kawshal lekamge gedara sarana Calcium', examDate: '2020/08/13', examMarks:36, trailDate:'2020/11/02', trailStatus:'Pass', remainingPay: '3500/='},
];
