import { TestBed, async } from '@angular/core/testing';

import { App2Component } from './app.component';

import { Component, ViewChild } from '@angular/core';
import { BackendApiService } from './backend-api.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Modal} from "ngx-modal";
import { Observable } from 'rxjs/Observable';

import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import { DataMap } from 'wijmo/wijmo.grid';
import {DataGridModule} from 'primeng/components/datagrid/datagrid';

describe('AppComponent2', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        App2Component
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(App2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(App2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(App2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
