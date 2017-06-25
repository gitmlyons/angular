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

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App2Component {
  title: string;
  cities: any[];
  citiesObservable: Observable<string[]>;
  cityData: any[];
  data: any[];
  cityMap: DataMap;
  closed: boolean = false;
  @ViewChild('flex') flex: WjFlexGrid;
  heroForm: FormGroup;
  @ViewChild('saveModal') saveModal: Modal;
  @ViewChild('revertModal') revertModal: Modal;

  constructor(private backendApiService: BackendApiService, private fb: FormBuilder) { 
     //[{'test':'test column value'}]
     this.cityData = [{'city':'Geelong'}];

     this.heroForm = this.fb.group({
      name: ['', Validators.required ], // <--- the FormControl called "name"
     });
  }
 
  getServiceData() {
   
    this.backendApiService.getServiceData().subscribe(
      data => { this.title = data.succeeded, 
        this.cities = data.result.map(function(city: string) { return {'city':city} } ),
        this.cityData = data.result.map(function(city: string) { return {'city':city} } )
      },                 
      error => { this.title = error});

    this.data = this.cities;
    this.cityMap = new DataMap(this.cityData, 'city', 'city');
    this.citiesObservable = this.backendApiService.getServiceData2();
  }  

  onSubmit() {
    this.saveModal.open();
  }

  revert() {
    this.revertModal.open();
  }
}
