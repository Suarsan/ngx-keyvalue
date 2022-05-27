import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxKeyvalueComponent } from './ngx-keyvalue.component';

describe('NgxKeyvalueComponent', () => {
  let component: NgxKeyvalueComponent;
  let fixture: ComponentFixture<NgxKeyvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxKeyvalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKeyvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
