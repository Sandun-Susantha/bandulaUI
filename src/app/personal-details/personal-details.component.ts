import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule , FormsModule} from '@angular/forms';
import { RegisterNewCustomerService } from '../services/register-new-customer.service'

import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import { DataService } from '../services/register-new-customer.service'

import * as moment from 'moment';

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

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    // {provide: MAT_DATE_FORMATS, useValue: 'en-GB'},
    // {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  // encapsulation: ViewEncapsulation.None,
})
export class PersonalDetailsComponent implements OnInit {

  isLinear = false;
  personalFormGroup: FormGroup;
  contactFormGroup: FormGroup;
  oldLicenseFormGroup: FormGroup;
  vehicleClassFormGroup: FormGroup;
  paymentsFormGroup: FormGroup;
  reviewFormGroup: FormGroup;
  districtOptions: FormGroup;
  bloodOptions: FormGroup;
  displayLabels: FormGroup;

  fname = "";


  constructor(private newCustomerData: RegisterNewCustomerService, private formStepper: FormBuilder, fb: FormBuilder) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.personalFormGroup = this.formStepper.group({

      surNameCtrl: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      lastNameCtrl: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      nicCtrl: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(13)]),
      // birthdayCtrl: [new FormControl()],
      birthdayCtrl: [new FormControl()],
      descriptionCtrl: [''],
      // displayBirthday:[new FormControl(moment(this.personalFormGroup.controls.birthdayCtrl.value).format('YYYY-MM-DD'))]
    });

    this.contactFormGroup = this.formStepper.group({
      mobileCtrl: ['', [Validators.required,Validators.pattern("^[0-9]{10}$")]],
      landNumberCtrl: ['', [Validators.required,Validators.pattern("^[0-9]{10}$")]],
      mobileAdditionalCtrl: ['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      emailCtrl: ['', [Validators.required, Validators.email]],
      homeNameCtrl: ['', Validators.required,Validators.pattern("^[0-9]{10}$")],
      streetNameCtrl: ['', Validators.required],
      villageNameCtrl: ['', Validators.required],
      cityCtrl: ['', Validators.required],
      districtControl: new FormControl('Badulla'),
    });
    this.oldLicenseFormGroup = this.formStepper.group({
      oldLicenseCtrl: [''],
      licenseDateCtrl: [new FormControl()],
      medicalNumberCtrl: [''],
      bloodControl: [''],
      medicalDateCtrl: [new FormControl()],
    });
    this.paymentsFormGroup = this.formStepper.group({
      fullPayCtrl: ['',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]],
      advancedPayCtrl: ['',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]],
      examCtrl: [new FormControl()],
      // remainingPayCtrl: [{value: this.paymentsFormGroup.touched().fullPayCtrl,disabled:true}],
    });
    this.vehicleClassFormGroup = this.formStepper.group({
      AOneCtrl: [false],
      ACtrl: [false],
      BOneCtrl: [false],
      BCtrl: [false],
      GOneCtrl: [false],
      COneCtrl: [false],
      CCtrl: [false],
      DOneCtrl: [false],
      DCtrl: [false],
      JCtrl: [false],
      GCtrl: [false],
      DECtrl: [false],
      CECtrl: [false],
      lightVehiCtrl: [''],
      heavyVehiCtrl: ['']
    });
    this.reviewFormGroup = this.formStepper.group({
      // displayBirthday : moment(this.personalFormGroup.getRawValue().birthdayCtrl).format('YYYY-MM-DD'),
      reviewCtrl: ['', Validators.required],
      chargedOfficerCtrl: new FormControl('Ms. Saranga'),
    });
  }

  getContactNuError(){
    if (this.contactFormGroup.controls.mobileCtrl.hasError('required')) {
      return 'Please enter a valid contact number';
    }

    if (this.contactFormGroup.controls.landNumberCtrl.hasError('required')) {
      return 'Please enter a valid contact number';
    }

    if (this.contactFormGroup.controls.mobileAdditionalCtrl.hasError('required')) {
      return 'Please enter a valid contact number';
    }
    return this.contactFormGroup.controls.mobileAdditionalCtrl.hasError('mobile') ? 'Not a valid contact number' : '';
  }

  getChargedPaymentError(){
    if (this.paymentsFormGroup.controls.fullPayCtrl.hasError('required')) {
      return 'Please enter the amount by rupees';
    }
    return this.paymentsFormGroup.controls.fullPayCtrl.hasError('cPayment') ? 'Not a valid amount by rupees' : '';
  }

  getAdvancedPayError(){
    if (this.paymentsFormGroup.controls.advancedPayCtrl.hasError('required')) {
      return 'Please enter the amount by rupees';
    }
    return this.paymentsFormGroup.controls.advancedPayCtrl.hasError('aPayment') ? 'Not a amount by rupees' : '';
  }

  getEmailError() {
    if (this.contactFormGroup.controls.emailCtrl.hasError('required')) {
      return 'Please enter a valid email';
    }
    return this.contactFormGroup.controls.emailCtrl.hasError('mobile') ? 'Not a valid email' : '';
  }

  getSurnameInfoError(){
    if (this.personalFormGroup.controls.surNameCtrl.hasError('required')) {
      return 'Please enter the sur name';
    }
    return this.personalFormGroup.controls.surNameCtrl.hasError('name') ? 'Not a valid sur name' : '';
  }

  getLastnameError(){
    if (this.personalFormGroup.controls.lastNameCtrl.hasError('required')) {
      return 'Please enter the last name';
    }
    return this.personalFormGroup.controls.lastNameCtrl.hasError('name') ? 'Not a valid name without surname' : '';
  }

  getNicInfoError() {
    if (this.personalFormGroup.controls.nicCtrl.hasError('required')) {
      return 'Please enter the valid NIC number';
    }
    return this.personalFormGroup.controls.nicCtrl.hasError('nic') ? 'Not a valid nic' : '';
  }

  trainingType = 'Long term';
  isShortTerm = false;
  displayBirthday= '';
  displayExam='';
  diaplayLicenDate= '';
  displayMedicalDate = '';
  displayGender ;
  genderValue ;
  daysOfDoB ;
  birthDayCal ;
  billNu ;

  onChange(event){
    if (event.checked === true){
      this.trainingType = 'Short term';
      this.isShortTerm = true;
    }else {
      this.trainingType = 'Long term';
      this.isShortTerm = false;
    }
  }

  onLightVehiUpdate(event){
    if (event.checked === true){
      this.vehicleClassFormGroup.controls.AOneCtrl.setValue(true);
      this.vehicleClassFormGroup.controls.ACtrl.setValue(true);
      this.vehicleClassFormGroup.controls.BOneCtrl.setValue(true);
      this.vehicleClassFormGroup.controls.BCtrl.setValue(true);
      this.vehicleClassFormGroup.controls.GOneCtrl.setValue(true);
    }else {
      this.vehicleClassFormGroup.controls.AOneCtrl.setValue(false);
      this.vehicleClassFormGroup.controls.ACtrl.setValue(false);
      this.vehicleClassFormGroup.controls.BOneCtrl.setValue(false);
      this.vehicleClassFormGroup.controls.BCtrl.setValue(false);
      this.vehicleClassFormGroup.controls.GOneCtrl.setValue(false);false
    }
  }

  onHeavyVehiUpdate(event){
    if (event.checked === true){
      this.vehicleClassFormGroup.controls.COneCtrl.setValue(true);
      this.vehicleClassFormGroup.controls.CCtrl.setValue(true);
      this.vehicleClassFormGroup.controls.DOneCtrl.setValue(true);
      this.vehicleClassFormGroup.controls.DCtrl.setValue(true);
      this.vehicleClassFormGroup.controls.JCtrl.setValue(true);
    }else {
      this.vehicleClassFormGroup.controls.COneCtrl.setValue(false);
      this.vehicleClassFormGroup.controls.CCtrl.setValue(false);
      this.vehicleClassFormGroup.controls.DOneCtrl.setValue(false);
      this.vehicleClassFormGroup.controls.DCtrl.setValue(false);
      this.vehicleClassFormGroup.controls.JCtrl.setValue(false);false
    }
  }

  onNic(){
    this.daysOfDoB = this.personalFormGroup.getRawValue().nicCtrl.substr(2,3);
    if (this.personalFormGroup.getRawValue().nicCtrl.length<12){
       if (this.daysOfDoB<500){
         this.displayGender = 'Male'
         this.genderValue = true;
         this.birthDayCal = moment().dayOfYear(this.daysOfDoB).format('MM-DD');
       }else {
         this.displayGender = 'Female'
         this.genderValue = false;
         this.birthDayCal = moment().dayOfYear(this.daysOfDoB-500).format('MM-DD');
       }
      this.birthDayCal = '19' + this.personalFormGroup.getRawValue().nicCtrl.substr(0,2)+ '-' + this.birthDayCal
    } else if (this.personalFormGroup.getRawValue().nicCtrl.length>12) {
      if (this.daysOfDoB < 500) {
        this.displayGender = 'Male'
        this.genderValue = true;
      } else {
        this.displayGender = 'Female'
        this.genderValue = false;
      }
      this.birthDayCal = moment().dayOfYear(this.daysOfDoB).format('MM-DD');
      this.birthDayCal =this.personalFormGroup.getRawValue().nicCtrl.substr(0,3) + '-' +this.birthDayCal
    }
  }

  updateBirthdayByNic(){
    if (this.personalFormGroup.getRawValue().nicCtrl.length<12){
      if (this.daysOfDoB<500){
        this.displayBirthday = moment().dayOfYear(this.daysOfDoB).format('MM-DD');
      }else {
        this.displayBirthday = moment().dayOfYear(this.daysOfDoB-500).format('MM-DD');
      }
      this.displayBirthday = this.birthDayCal
    } else if (this.personalFormGroup.getRawValue().nicCtrl.length>12) {
      if (this.daysOfDoB < 500) {
      } else {
      }
      this.displayBirthday = moment().dayOfYear(this.daysOfDoB).format('MM-DD');
      this.displayBirthday =this.birthDayCal
    }
    this.personalFormGroup.controls.birthdayCtrl.setValue(this.birthDayCal);
    // console.log(this.birthDayCal);
  }

  onBirthday(){
    this.displayBirthday = moment(this.personalFormGroup.getRawValue().birthdayCtrl).format('YYYY-MM-DD');
  }
  onLicenDate(){
    // console.log(moment(this.oldLicenseFormGroup.controls.licenseDateCtrl.value).format('YYYY-MM-DD'));
    this.diaplayLicenDate = moment(this.oldLicenseFormGroup.getRawValue().licenseDateCtrl).format('YYYY-MM-DD');
  }
  onMedicalDate(){
    // console.log(moment(this.oldLicenseFormGroup.controls.medicalDateCtrl.value).format('YYYY-MM-DD'));
    this.displayMedicalDate = moment(this.oldLicenseFormGroup.getRawValue().medicalDateCtrl).format('YYYY-MM-DD');
  }
  onExamDate(){
    // console.log(moment(this.paymentsFormGroup.controls.examCtrl.value).format('YYYY-MM-DD'));
    this.displayExam = moment(this.paymentsFormGroup.getRawValue().examCtrl).format('YYYY-MM-DD');
  }
  today = moment(Date.now()).format('YYYY-MM-DD')

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Work Complete");
      resolve();
    }, 1000);
  });

  newCustomer(){
    this.newCustomerData.register(
      "{"+"\"surName\":\""+this.personalFormGroup.controls.surNameCtrl.value+"\",\"cusName\":\""+this.personalFormGroup.controls.lastNameCtrl.value+"\",\"gender\":\""+this.genderValue+"\",\"oldLicenNum\":\""+this.oldLicenseFormGroup.controls.oldLicenseCtrl.value+"\",\"licenDate\":\""+this.diaplayLicenDate+"\",\"nicNumber\":\""+this.personalFormGroup.controls.nicCtrl.value+"\",\"birthDay\":\""+this.displayBirthday+"\",\"isShortTerm\":\""+this.isShortTerm+"\",\"description\":\""+this.personalFormGroup.controls.descriptionCtrl.value+"\",\"medicalNu\":\""+this.oldLicenseFormGroup.controls.medicalNumberCtrl.value+"\",\"medicalDate\":\""+this.displayMedicalDate+"\",\"bloodGroup\":\""+this.oldLicenseFormGroup.controls.bloodControl.value+"\","+"\"writtenExamDetailsBeanList\":[{\"newExamDate\":\""+this.displayExam+"\"}]"+","+"\"contactDetailsBean\":{\"cusEmail\":\""+this.contactFormGroup.controls.emailCtrl.value+"\",\"mobilePrimary\":\""+this.contactFormGroup.controls.mobileCtrl.value+"\",\"mobileSecondary\":\""+this.contactFormGroup.controls.mobileAdditionalCtrl.value+"\",\"landNumber\":\""+this.contactFormGroup.controls.landNumberCtrl.value+"\",\"homeName\":\""+this.contactFormGroup.controls.homeNameCtrl.value+"\",\"streetName\":\""+this.contactFormGroup.controls.streetNameCtrl.value+"\",\"villageName\":\""+this.contactFormGroup.controls.villageNameCtrl.value+"\",\"cityName\":\""+this.contactFormGroup.controls.cityCtrl.value+"\",\"district\":\""+this.contactFormGroup.controls.districtControl.value+"\""+"},"+"\"vehicleClassesBean\":{\"a1\":"+
      this.vehicleClassFormGroup.controls.AOneCtrl.value+
      ",\"a\":"+this.vehicleClassFormGroup.controls.ACtrl.value+
      ",\"b1\":"+this.vehicleClassFormGroup.controls.BOneCtrl.value+
      ",\"b\":"+this.vehicleClassFormGroup.controls.BCtrl.value+
      ",\"c1\":"+this.vehicleClassFormGroup.controls.COneCtrl.value+
      ",\"c\":"+this.vehicleClassFormGroup.controls.CCtrl.value+
      ",\"ce\":"+this.vehicleClassFormGroup.controls.CECtrl.value+
      ",\"d1\":"+this.vehicleClassFormGroup.controls.DOneCtrl.value+
      ",\"d\":"+this.vehicleClassFormGroup.controls.DCtrl.value+
      ",\"de\":"+this.vehicleClassFormGroup.controls.DECtrl.value+
      ",\"g1\":"+this.vehicleClassFormGroup.controls.GOneCtrl.value+
      ",\"g\":"+this.vehicleClassFormGroup.controls.GCtrl.value+
      ",\"j\":"+this.vehicleClassFormGroup.controls.JCtrl.value+
      "},"+"\"advancedPaymentBean\":{"+"\"amountChargeable\":"+this.paymentsFormGroup.controls.fullPayCtrl.value+","+"\"addvancedPayment\":"+this.paymentsFormGroup.controls.advancedPayCtrl.value+","+"\"chargedOfficer\":"+"\""+this.reviewFormGroup.controls.chargedOfficerCtrl.value+"\""+","+"\"branch\":"+"\"Mahiyanganaya\""+","+"\"paymentDate\":"+"\""+this.today+"\""+"}"+"}"
    ).subscribe(
      response => (this.billNu=response.customerId,console.log('bill : '+this.billNu)),
      error => console.log('Error.!', error),

    )

    console.log('Bill after submit: '+this.billNu)

    this.newCustomerData.getNewCustomerDetails(
      this.billNu,
      this.personalFormGroup.controls.surNameCtrl.value,
      this.personalFormGroup.controls.lastNameCtrl.value,
      this.personalFormGroup.controls.nicCtrl.value,
      this.displayBirthday,
      this.displayGender,
      this.personalFormGroup.controls.descriptionCtrl.value,
      this.contactFormGroup.controls.mobileCtrl.value,
      this.contactFormGroup.controls.landNumberCtrl.value,
      this.contactFormGroup.controls.mobileAdditionalCtrl.value,
      this.contactFormGroup.controls.emailCtrl.value,
      this.contactFormGroup.controls.homeNameCtrl.value,
      this.contactFormGroup.controls.streetNameCtrl.value,
      this.contactFormGroup.controls.villageNameCtrl.value,
      this.contactFormGroup.controls.cityCtrl.value,
      this.contactFormGroup.controls.districtControl.value,
      this.oldLicenseFormGroup.controls.oldLicenseCtrl.value,
      this.diaplayLicenDate,
      this.oldLicenseFormGroup.controls.medicalNumberCtrl.value,
      this.oldLicenseFormGroup.controls.bloodControl.value,
      this.displayMedicalDate,
      this.vehicleClassFormGroup.controls.AOneCtrl.value,
      this.vehicleClassFormGroup.controls.ACtrl.value,
      this.vehicleClassFormGroup.controls.BOneCtrl.value,
      this.vehicleClassFormGroup.controls.BCtrl.value,
      this.vehicleClassFormGroup.controls.GOneCtrl.value,
      this.vehicleClassFormGroup.controls.COneCtrl.value,
      this.vehicleClassFormGroup.controls.CCtrl.value,
      this.vehicleClassFormGroup.controls.DOneCtrl.value,
      this.vehicleClassFormGroup.controls.DCtrl.value,
      this.vehicleClassFormGroup.controls.JCtrl.value,
      this.vehicleClassFormGroup.controls.GCtrl.value,
      this.vehicleClassFormGroup.controls.DECtrl.value,
      this.vehicleClassFormGroup.controls.CECtrl.value,
      this.displayExam,
      this.paymentsFormGroup.controls.fullPayCtrl.value,
      this.paymentsFormGroup.controls.advancedPayCtrl.value,
      this.paymentsFormGroup.controls.fullPayCtrl.value-this.paymentsFormGroup.controls.advancedPayCtrl.value,
      this.reviewFormGroup.controls.chargedOfficerCtrl.value,
      "Mahiyanganaya",
      this.today,
    )
  }
}
