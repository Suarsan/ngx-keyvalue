import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
import { Item } from './item.interface';
import { NgxKeyvalueService } from './ngx-keyvalue.service';

@Component({
  selector: 'ngx-keyvalue',
  templateUrl: 'ngx-keyvalue.component.html',
  styleUrls: ['ngx-keyvalue.component.scss']
})
export class NgxKeyvalueComponent implements OnInit {

  @Input() input!: Array<Item>;
  @Output() changes = new EventEmitter<Array<Item>>();
  items = new Array<Item>();

  constructor(private keyValueService: NgxKeyvalueService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.listenAddItem();
    this.listenDeleteItem();
  }

  ngOnChanges() {
    if (this.input && (this.input.length > 0)) {
      this.items = this.input;
    }
  }

  private listenAddItem() {
    this.keyValueService.listenAddItem().pipe(
      tap(o => this.items.push(o)),
      tap(o => this.cd.detectChanges()),
      tap(o => this.changes.emit(this.items))
    ).subscribe();
  }

  private listenDeleteItem() {
    this.keyValueService.listenDeleteItem().pipe(
      tap(item => this.items.splice(this.items.findIndex(i => i.key === item.key), 1)),
      tap(o => this.cd.detectChanges()),
      tap(o => this.changes.emit(this.items))
    ).subscribe();
  }

}
