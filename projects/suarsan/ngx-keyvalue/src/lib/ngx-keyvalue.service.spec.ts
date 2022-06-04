import { TestBed } from '@angular/core/testing';
import { tap } from 'rxjs/internal/operators/tap';
import { Item } from './item.interface';
import { NgxKeyvalueService } from './ngx-keyvalue.service';

describe('NgxKeyvalueService', () => {
  let service: NgxKeyvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxKeyvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should listenAddItem receive item to add', () => {
    const item: Item = { key: 'key', value: 'value' };
    service.listenAddItem().pipe(
      tap(o => expect(o).toEqual(item))
    ).subscribe();
    service.addItem(item);
  });

  it('should listenDeleteItem receive item to delete', () => {
    const item: Item = { key: 'key', value: 'value' };
    service.listenDeleteItem().pipe(
      tap(o => expect(o).toEqual(item))
    ).subscribe();
    service.deleteItem(item);
  });
});
