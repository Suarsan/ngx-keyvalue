import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs/internal/operators/tap';
import { Item } from '../item.interface';
import { NgxKeyvalueService } from '../ngx-keyvalue.service';
import { NgxKeyvalueAddComponent } from './ngx-keyvalue-add.component';

describe('NgxKeyvalueAddComponent', () => {
  let component: NgxKeyvalueAddComponent;
  let fixture: ComponentFixture<NgxKeyvalueAddComponent>;
  let ngxKeyvalueService: NgxKeyvalueService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ NgxKeyvalueAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKeyvalueAddComponent);
    component = fixture.componentInstance;
    ngxKeyvalueService = TestBed.inject(NgxKeyvalueService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add item', () => {
    const item: Item = { key: 'key', value: 'value' };
    component.itemForm = new FormGroup({
      key: new FormControl('key', Validators.required),
      value: new FormControl('value', Validators.required)
    });
    ngxKeyvalueService.listenAddItem().pipe(
      tap(o => expect(o).toEqual(item))
    ).subscribe();
    component.add();
  });
});
