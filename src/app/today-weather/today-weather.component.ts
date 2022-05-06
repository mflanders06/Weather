import { Component, Input } from '@angular/core';
import { Coord } from '../coord';
import { OneCall } from '../oneCall';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss']
})
export class TodayWeatherComponent {

  @Input() weather: OneCall | null = null
  @Input() coordinates: Coord | null = null

}
