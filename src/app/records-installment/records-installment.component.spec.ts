import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsInstallmentComponent } from './records-installment.component';

describe('RecordsInstallmentComponent', () => {
  let component: RecordsInstallmentComponent;
  let fixture: ComponentFixture<RecordsInstallmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsInstallmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsInstallmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
