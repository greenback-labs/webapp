import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsPersonComponent } from './records-person.component';

describe('RecordsPersonComponent', () => {
  let component: RecordsPersonComponent;
  let fixture: ComponentFixture<RecordsPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
