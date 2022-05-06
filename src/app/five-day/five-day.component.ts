import { Component, Input } from '@angular/core';


import { OneCall } from '../oneCall';

@Component({
  selector: 'app-five-day',
  templateUrl: './five-day.component.html',
  styleUrls: ['./five-day.component.scss']
})
export class FiveDayComponent {

  @Input() weather: OneCall | null = null


}
