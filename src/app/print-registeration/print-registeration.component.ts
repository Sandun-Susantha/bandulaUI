import { Component, OnInit } from '@angular/core';
import { RegisterNewCustomerService } from '../services/register-new-customer.service'
import {register} from "ts-node";

@Component({
  selector: 'app-print-registeration',
  templateUrl: './print-registeration.component.html',
  styleUrls: ['./print-registeration.component.css']
})
export class PrintRegisterationComponent implements OnInit {

  billNu:string

  surName:string
  lastName:string
  nic:string
  birthday:string
  gender:string
  description:string

  mobile:string
  landNumber:string
  secondaryMobile:string
  email:string

  homeName:string
  streetName:string
  villageName:string
  cityName:string
  district:string

  oldLicenNumber:string
  oldLicenDate:string
  medicalNum:string
  bloodGroup:string
  medicalDate:string

  ACtrl:boolean
  aCls:boolean
  bOneCls:boolean
  bCls:boolean
  gOneCls:boolean
  cOnecls:boolean
  cCls:boolean
  dOneCls:boolean
  dCls:boolean
  jCls:boolean
  gCls:boolean
  dECls:boolean
  cECls:boolean

  examDate:string
  chagedPay:string
  advPay:string
  remainingPay:number
  chargedOfficer:string
  branch:string
  date:string

  constructor(private newCustomerDetails: RegisterNewCustomerService) { }

  ngOnInit(): void {

    this.newCustomerDetails.currentBillNu.subscribe(billNu => this.billNu = billNu)

    this.newCustomerDetails.currentSurName.subscribe(surName => this.surName = surName)
    this.newCustomerDetails.currentLastName.subscribe(lastName => this.lastName = lastName)
    this.newCustomerDetails.currentNIC.subscribe(nic => this.nic = nic)
    this.newCustomerDetails.currentBirthday.subscribe(birthday => this.birthday = birthday)
    this.newCustomerDetails.currentGender.subscribe(gender => this.gender = gender)
    this.newCustomerDetails.currentDesc.subscribe(description => this.description = description)

    this.newCustomerDetails.currentMobile.subscribe(mobile => this.mobile = mobile)
    this.newCustomerDetails.currentLandNumber.subscribe(landNumber => this.landNumber = landNumber)
    this.newCustomerDetails.currentSecondaryMobile.subscribe(secondaryMobile => this.secondaryMobile = secondaryMobile)
    this.newCustomerDetails.currentEmail.subscribe(email => this.email = email)

    this.newCustomerDetails.currentHomeName.subscribe(homeName => this.homeName = homeName)
    this.newCustomerDetails.currentStreetName.subscribe(streetName => this.streetName = streetName)
    this.newCustomerDetails.currentVillageName.subscribe(villageName => this.villageName = villageName)
    this.newCustomerDetails.currentCityName.subscribe(cityName => this.cityName = cityName)
    this.newCustomerDetails.currentDistrict.subscribe(district => this.district = district)

    this.newCustomerDetails.currentOldLicenNumber.subscribe(oldLicenNumber => this.oldLicenNumber = oldLicenNumber)
    this.newCustomerDetails.currentOldLicenDate.subscribe(oldLicenDate => this.oldLicenDate = oldLicenDate)
    this.newCustomerDetails.currentMedicalNum.subscribe(medicalNum => this.medicalNum = medicalNum)
    this.newCustomerDetails.currentBloodGroup.subscribe(bloodGroup => this.bloodGroup = bloodGroup)
    this.newCustomerDetails.currentMedicalDate.subscribe(medicalDate => this.medicalDate = medicalDate)

    this.newCustomerDetails.currentAOneCls.subscribe(ACtrl => this.ACtrl = ACtrl)
    this.newCustomerDetails.currentACls.subscribe(aCls => this.aCls = aCls)
    this.newCustomerDetails.currentBOneCls.subscribe(bOneCls => this.bOneCls = bOneCls)
    this.newCustomerDetails.currentBCls.subscribe(bCls => this.bCls = bCls)
    this.newCustomerDetails.currentGOneCls.subscribe(gOneCls => this.gOneCls = gOneCls)
    this.newCustomerDetails.currentCOnecls.subscribe(cOnecls => this.cOnecls = cOnecls)
    this.newCustomerDetails.currentCCls.subscribe(cCls => this.cCls = cCls)
    this.newCustomerDetails.currentDOneCls.subscribe(dOneCls => this.dOneCls = dOneCls)
    this.newCustomerDetails.currentDCls.subscribe(dCls => this.dCls = dCls)
    this.newCustomerDetails.currentJCls.subscribe(jCls => this.jCls = jCls)
    this.newCustomerDetails.currentGCls.subscribe(gCls => this.gCls = gCls)
    this.newCustomerDetails.currentDECls.subscribe(dECls => this.dECls = dECls)
    this.newCustomerDetails.currentCECls.subscribe(cECls => this.cECls = cECls)

    this.newCustomerDetails.currentExamDate.subscribe(examDate => this.examDate = examDate)
    this.newCustomerDetails.currentChagedPay.subscribe(chagedPay => this.chagedPay = chagedPay)
    this.newCustomerDetails.currentAdvPay.subscribe(advPay => this.advPay = advPay)
    this.newCustomerDetails.currentRemainingPay.subscribe(remainingPay => this.remainingPay = remainingPay)
    this.newCustomerDetails.currentChargedOfficer.subscribe(chargedOfficer => this.chargedOfficer = chargedOfficer)
    this.newCustomerDetails.currentBranch.subscribe(branch => this.branch = branch)
    this.newCustomerDetails.currentDate.subscribe(date => this.date = date)
    this.newCustomerDetails.currentBillNu.subscribe(billNu => this.billNu = billNu)
    // window.print()
    // console.log('bill from print : '+this.billNu)
  }

  printPage(){
    window.print();
  }
}
