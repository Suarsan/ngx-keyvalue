import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';


describe('NgxKeyvalueTableComponent', () => {
  let component: NgxKeyvalueTableComponent;
  let fixture: ComponentFixture<KeyValueTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyValueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyValueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
