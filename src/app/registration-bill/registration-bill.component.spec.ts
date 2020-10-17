import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationBillComponent } from './registration-bill.component';

describe('RegistrationBillComponent', () => {
  let component: RegistrationBillComponent;
  let fixture: ComponentFixture<RegistrationBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
