import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.css']
})
export class CourtComponent {
  constructor(public route:ActivatedRoute){

  }

}
