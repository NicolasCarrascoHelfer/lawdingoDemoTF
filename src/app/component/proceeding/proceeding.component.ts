import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proceeding',
  templateUrl: './proceeding.component.html',
  styleUrls: ['./proceeding.component.css'],
})
export class ProceedingComponent {
  constructor(public route: ActivatedRoute) {}
}
