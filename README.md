# NgxKeyvalue

[![npm version](https://badge.fury.io/js/@suarsan%2Fngx-keyvalue.svg)](https://badge.fury.io/js/@suarsan%2Fngx-keyvalue)

A full featured and customizable key/value pairs generator for Angular.

![alt text](https://github.com/Suarsan/ngx-keyvalue/raw/master/projects/suarsan/ngx-keyvalue/demo.png)


## Demo

Try full demo  at **[ngx-keyvalue](https://javiersuarezsanchez.com/#/ngx-keyvalue)**

## Usage

#### Installation

Install via npm

    npm install @suarsan/ngx-keyvalue
    
#### Usage

Import ``NgxKeyvalueModule`` in your app.module.ts

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    
    import { NgxKeyvalueModule } from '@suarsan/ngx-keyvalue';

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxKeyvalueModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

## Documentation

#### Inputs

| Input | Type | Default | Required | Description |
| ----- | ---- | ------  | -------- | ----------- |
| input | `Array<Item>` | [] | false | Input data |

#### Example

    <ngx-keyvalue [input]="data" (changes)="listenChanges($event)"></ngx-keyvalue>

---

## Creator

**[Javier Suárez Sánchez](https://javiersuarezsanchez.com)**




---

### Keywords

`angular` `ngx` `javascript` `keyvalue` `key` `value` `list` `rich` `customizable`

---


