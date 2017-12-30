import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsTransactionComponent } from './records-transaction.component';

describe('RecordsTransactionComponent', () => {
  let component: RecordsTransactionComponent;
  let fixture: ComponentFixture<RecordsTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
