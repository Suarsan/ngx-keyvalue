import { Component } from '@angular/core';
import { Item } from 'projects/suarsan/ngx-keyvalue/src/lib/item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  input: Array<Item> = [
    { key: 'key_1', value: 'value_1' },
    { key: 'key_2', value: 'value_2' },
    { key: 'key_3', value: 'value_3' },
    { key: 'key_4', value: 'value_4' },
    { key: 'key_5', value: 'value_5' }
  ];

  public listenChanges(changes: Array<Item>) {
    console.dir(changes);
  }
}
