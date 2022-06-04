import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxKeyvalueService {

  private addItemListener = new Subject<Item>();
  private deleteItemListener = new Subject<Item>();

  constructor() { }

  public listenAddItem(): Observable<Item> {
    return this.addItemListener.asObservable();
  }

  public addItem(item: Item) {
    this.addItemListener.next(item);
  }

  public listenDeleteItem(): Observable<Item> {
    return this.deleteItemListener.asObservable();
  }

  public deleteItem(item: Item) {
    this.deleteItemListener.next(item);
  }
}
