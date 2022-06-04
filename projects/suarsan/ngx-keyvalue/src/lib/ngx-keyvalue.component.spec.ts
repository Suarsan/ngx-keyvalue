import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Item } from './item.interface';
import { NgxKeyvalueAddComponent } from './ngx-keyvalue-add/ngx-keyvalue-add.component';
import { NgxKeyvalueTableComponent } from './ngx-keyvalue-table/ngx-keyvalue-table.component';

import { NgxKeyvalueComponent } from './ngx-keyvalue.component';
import { NgxKeyvalueService } from './ngx-keyvalue.service';

describe('NgxKeyvalueComponent', () => {
  let component: NgxKeyvalueComponent;
  let fixture: ComponentFixture<NgxKeyvalueComponent>;
  let ngxKeyvalueService: NgxKeyvalueService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ NgxKeyvalueComponent,
                      NgxKeyvalueAddComponent,
                      NgxKeyvalueTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxKeyvalueComponent);
    component = fixture.componentInstance;
    ngxKeyvalueService = TestBed.inject(NgxKeyvalueService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ', () => {
    const items: Array<Item> = [{ key: 'key_1', value: 'value_1' }, { key: 'key_2', value: 'value_2' }];
    expect(component.items).toEqual([]);
    component.input = items;
    component.ngOnChanges();
    expect(component.items).toEqual(items);
  });

  it('should add item', () => {
    const item: Item = { key: 'key', value: 'value' };
    component['listenAddItem'];
    expect(component.items).toEqual([]);
    ngxKeyvalueService.addItem(item);
    expect(component.items[0]).toEqual(item);
  });

  it('should delete item', () => {
    const items: Array<Item> = [{ key: 'key_1', value: 'value_1' }, { key: 'key_2', value: 'value_2' }];
    component['listenAddItem'];
    expect(component.items).toEqual([]);
    component.items = [...items];
    expect(component.items).toEqual(items);
    ngxKeyvalueService.deleteItem(items[0]);
    expect(component.items[0]).toEqual(items[1]);
    ngxKeyvalueService.deleteItem(items[1]);
    expect(component.items).toEqual([]);
  });
});
