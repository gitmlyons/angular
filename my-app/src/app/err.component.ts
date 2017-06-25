import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'err',
  templateUrl: './err.component.html',
  styleUrls: ['./err.component.css']
})
export class ErrComponent {
    error: string;

  constructor(private route: ActivatedRoute) 
  { 
    if (route.snapshot.data['error'] != null)
        this.error = route.snapshot.data['error']; 
    else
        this.error = route.snapshot.params['id']; 
  }
}