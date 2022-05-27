import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxKeyvalueService } from '../ngx-keyvalue.service';

@Component({
  selector: 'ngx-keyvalue-add',
  templateUrl: './ngx-keyvalue-add.component.html',
  styleUrls: ['./ngx-keyvalue-add.component.scss']
})
export class NgxKeyvalueAddComponent implements OnInit {

  itemForm = new FormGroup({
    key: new FormControl(null, Validators.required),
    value: new FormControl(null, Validators.required)
  });

  constructor(private keyvalueService: NgxKeyvalueService) { }

  ngOnInit() {
  }

  public add() {
    if (this.itemForm.valid) {
      this.keyvalueService.addItem({ key: this.itemForm.get('key')!.value, value: this.itemForm.get('value')!.value });
      this.itemForm.reset();
    }
  }
}
