import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {ModalModule} from "ngx-modal";

import { WjGridModule, WjFlexGrid } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import {DataGridModule} from 'primeng/components/datagrid/datagrid';

import { AppComponent } from './approot.component';
import { App2Component } from './app.component';
import { ErrComponent } from './err.component';
import { BackendApiService } from './backend-api.service';

const appRoutes: Routes = [
  { path: 'cities', component: App2Component },
  {
    path: 'city/:id',
    component: ErrComponent,
  },
  { path: 'cityerr',
    component: ErrComponent,
    data: { error : 'Test2' }
  },  
  { path: '',
    redirectTo: '/cities',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    ErrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    WjInputModule,    
    WjGridModule,
    DataGridModule,
    ReactiveFormsModule,
    ModalModule
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
