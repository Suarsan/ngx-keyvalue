import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxKeyvalueAddComponent } from './ngx-keyvalue-add.component';

describe('NgxKeyvalueAddComponent', () => {
  let component: NgxKeyvalueAddComponent;
  let fixture: ComponentFixture<NgxKeyvalueAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxKeyvalueAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKeyvalueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
