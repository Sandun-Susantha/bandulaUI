import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRegisterationComponent } from './print-registeration.component';

describe('PrintRegisterationComponent', () => {
  let component: PrintRegisterationComponent;
  let fixture: ComponentFixture<PrintRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
