import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxKeyvalueAddComponent } from './ngx-keyvalue-add/ngx-keyvalue-add.component';
import { NgxKeyvalueTableComponent } from './ngx-keyvalue-table/ngx-keyvalue-table.component';
import { NgxKeyvalueComponent } from './ngx-keyvalue.component';
import { NgxKeyvalueService } from './ngx-keyvalue.service';



@NgModule({
  declarations: [
    NgxKeyvalueComponent,
    NgxKeyvalueAddComponent,
    NgxKeyvalueTableComponent
  ],
  providers: [
    NgxKeyvalueService
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    NgxKeyvalueComponent
  ]
})
export class NgxKeyvalueModule { }
