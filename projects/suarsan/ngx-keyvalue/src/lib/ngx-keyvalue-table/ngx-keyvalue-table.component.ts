import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.interface';
import { NgxKeyvalueService } from '../ngx-keyvalue.service';

@Component({
  selector: 'ngx-keyvalue-table',
  templateUrl: './ngx-keyvalue-table.component.html',
  styleUrls: ['./ngx-keyvalue-table.component.scss']
})
export class NgxKeyvalueTableComponent implements OnInit {

  @Input() items!: Array<Item>;

  constructor(private ngxKeyvalueService: NgxKeyvalueService) {
  }

  ngOnInit() {
  }

  public delete(item: Item) {
    this.ngxKeyvalueService.deleteItem(item);
  }
}
