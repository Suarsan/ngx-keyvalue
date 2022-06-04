import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { tap } from 'rxjs/internal/operators/tap';
import { Item } from '../item.interface';
import { NgxKeyvalueService } from '../ngx-keyvalue.service';
import { NgxKeyvalueTableComponent } from './ngx-keyvalue-table.component';


describe('NgxKeyvalueTableComponent', () => {
  let component: NgxKeyvalueTableComponent;
  let fixture: ComponentFixture<NgxKeyvalueTableComponent>;
  let ngxKeyvalueService: NgxKeyvalueService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxKeyvalueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKeyvalueTableComponent);
    component = fixture.componentInstance;
    ngxKeyvalueService = TestBed.inject(NgxKeyvalueService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete item', () => {
    const item: Item = { key: 'key', value: 'value' };
    ngxKeyvalueService.listenDeleteItem().pipe(
      tap(o => expect(o).toEqual(item))
    ).subscribe();
    component.delete(item);
    
  });
});
