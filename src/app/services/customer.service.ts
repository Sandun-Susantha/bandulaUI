import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { ICustomers} from "../../assets/icustomers";
import {shareReplay, tap} from "rxjs/operators";

// import any = jasmine.any;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  registerApi = 'http://localhost:8080/admin/api/post/newCustomer';

  getAllCustomersApi = 'http://localhost:8080/admin/api/get/getAllCustomers';

  private billNu = new BehaviorSubject<string>("");

  private surName = new BehaviorSubject<string>("");
  private lastName = new BehaviorSubject<string>("");
  private nic = new BehaviorSubject<string>("");
  private birthday = new BehaviorSubject<string>("");
  private gender = new BehaviorSubject<string>("");
  private description = new BehaviorSubject<string>("");

  private mobile = new BehaviorSubject<string>("");
  private landNumber = new BehaviorSubject<string>("");
  private secondaryMobile = new BehaviorSubject<string>("");
  private email = new BehaviorSubject<string>("");

  private homeName = new BehaviorSubject<string>("");
  private streetName = new BehaviorSubject<string>("");
  private villageName = new BehaviorSubject<string>("");
  private cityName = new BehaviorSubject<string>("");
  private district = new BehaviorSubject<string>("");

  private oldLicenNumber = new BehaviorSubject<string>("");
  private oldLicenDate = new BehaviorSubject<string>("");
  private medicalNum = new BehaviorSubject<string>("");
  private bloodGroup = new BehaviorSubject<string>("");
  private medicalDate = new BehaviorSubject<string>("");

  private aOneCls = new BehaviorSubject<boolean>(false);
  private aCls = new BehaviorSubject<boolean>(false);
  private bOneCls = new BehaviorSubject<boolean>(false);
  private bCls = new BehaviorSubject<boolean>(false);
  private gOneCls = new BehaviorSubject<boolean>(false);
  private cOnecls = new BehaviorSubject<boolean>(false);
  private cCls = new BehaviorSubject<boolean>(false);
  private dOneCls = new BehaviorSubject<boolean>(false);
  private dCls = new BehaviorSubject<boolean>(false);
  private jCls = new BehaviorSubject<boolean>(false);
  private gCls = new BehaviorSubject<boolean>(false);
  private dECls = new BehaviorSubject<boolean>(false);
  private cECls = new BehaviorSubject<boolean>(false);

  private examDate = new BehaviorSubject<string>("");
  private chagedPay = new BehaviorSubject<string>("");
  private advPay = new BehaviorSubject<string>("");
  private remainingPay = new BehaviorSubject<number>(0);
  private chargedOfficer = new BehaviorSubject<string>("");
  private branch = new BehaviorSubject<string>("");
  private date = new BehaviorSubject<string>("");

  private selectedNic = new BehaviorSubject<string>("")

  currentSelectedNic = this.selectedNic.asObservable()

  private getByNic = new BehaviorSubject<string>("")
  getCustomerByNicApi = this.getByNic.asObservable()

  currentBillNu = this.billNu.asObservable()

  currentSurName = this.surName.asObservable()
  currentLastName = this.lastName.asObservable()
  currentNIC = this.nic.asObservable()
  currentBirthday = this.birthday.asObservable()
  currentGender = this.gender.asObservable()
  currentDesc = this.description.asObservable()

  currentMobile = this.mobile.asObservable()
  currentLandNumber = this.landNumber.asObservable()
  currentSecondaryMobile = this.secondaryMobile.asObservable()
  currentEmail = this.email.asObservable()

  currentHomeName = this.homeName.asObservable()
  currentStreetName = this.streetName.asObservable()
  currentVillageName = this.villageName.asObservable()
  currentCityName = this.cityName.asObservable()
  currentDistrict = this.district.asObservable()

  currentOldLicenNumber = this.oldLicenNumber.asObservable()
  currentOldLicenDate = this.oldLicenDate.asObservable()
  currentMedicalNum = this.medicalNum.asObservable()
  currentBloodGroup = this.bloodGroup.asObservable()
  currentMedicalDate = this.medicalDate.asObservable()

  currentAOneCls = this.aOneCls.asObservable()
  currentACls = this.aCls.asObservable()
  currentBOneCls = this.bOneCls.asObservable()
  currentBCls = this.bCls.asObservable()
  currentGOneCls = this.gOneCls.asObservable()
  currentCOnecls = this.cOnecls.asObservable()
  currentCCls = this.cCls.asObservable()
  currentDOneCls = this.dOneCls.asObservable()
  currentDCls = this.dCls.asObservable()
  currentJCls = this.jCls.asObservable()
  currentGCls = this.gCls.asObservable()
  currentDECls = this.dECls.asObservable()
  currentCECls = this.cECls.asObservable()

  currentExamDate = this.examDate.asObservable()
  currentChagedPay = this.chagedPay.asObservable()
  currentAdvPay = this.advPay.asObservable()
  currentRemainingPay = this.remainingPay.asObservable()
  currentChargedOfficer = this.chargedOfficer.asObservable()
  currentBranch = this.branch.asObservable()
  currentDate = this.date.asObservable()

  constructor(private _http: HttpClient) {  }

  getNewCustomerDetails(billNu:string, surName: string, lastName: string, nic: string, birthday: string, gender:string, descrption:string, mobileNumber:string, landNumber:string, secondaryMobile:string, email:string,
                        homeName:string, streetName:string, villageName:string, cityName:string, district:string, oldLicenNumber:string, oldLicenDate:string, medicalNum: string, bloodGroup:string, medicalDate:string,
                        aOneCls:boolean, aCls:boolean, bOneCls:boolean, bCls:boolean, gOneCls:boolean, cOnecls:boolean, cCls:boolean, dOneCls:boolean, dCls:boolean, jCls:boolean, gCls:boolean, dECls:boolean, cECls:boolean,
                        examDate:string,chagedPay:string,advPay:string,remainingPay:number, chargedOfficer:string,branch:string,date:string)
  {
    this.billNu.next(billNu), this.surName.next(surName); this.lastName.next(lastName); this.nic.next(nic); this.birthday.next(birthday); this.gender.next(gender);this.description.next(descrption)
    this.mobile.next(mobileNumber), this.landNumber.next(landNumber), this.secondaryMobile.next(secondaryMobile), this.email.next(email)
    this.homeName.next(homeName),this.streetName.next(streetName),this.villageName.next(villageName),this.cityName.next(cityName),this.district.next(district)
    this.oldLicenNumber.next(oldLicenNumber),this.oldLicenDate.next(oldLicenDate),this.medicalNum.next(medicalNum),this.bloodGroup.next(bloodGroup),this.medicalDate.next(medicalDate)
    this.aOneCls.next(aOneCls),this.aCls.next(aCls),this.bOneCls.next(bOneCls),this.bCls.next(bCls),this.gOneCls.next(gOneCls),this.cOnecls.next(cOnecls),this.cCls.next(cCls),this.dOneCls.next(dOneCls),this.dCls.next(dCls),this.jCls.next(jCls),this.gCls.next(gCls),this.dECls.next(dECls),this.cECls.next(cECls)
    this.examDate.next(examDate),this.chagedPay.next(chagedPay),this.advPay.next(advPay),this.remainingPay.next(remainingPay),this.chargedOfficer.next(chargedOfficer),this.branch.next(branch),this.date.next(date)
  }

  getCustomers(): Observable<any>{
    return this._http.get<any>(this.getAllCustomersApi);
  }

  register(newCustomer){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.post<any>(this.registerApi, newCustomer,{headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })});
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
  }
}
