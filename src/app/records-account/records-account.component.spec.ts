import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsAccountComponent } from './records-account.component';

describe('RecordsAccountComponent', () => {
  let component: RecordsAccountComponent;
  let fixture: ComponentFixture<RecordsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
