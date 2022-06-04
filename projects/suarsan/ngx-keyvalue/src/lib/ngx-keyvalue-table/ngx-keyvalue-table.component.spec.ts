import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxKeyvalueTableComponent } from './ngx-keyvalue-table.component';


describe('NgxKeyvalueTableComponent', () => {
  let component: NgxKeyvalueTableComponent;
  let fixture: ComponentFixture<NgxKeyvalueTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxKeyvalueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKeyvalueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
