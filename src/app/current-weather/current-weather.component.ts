import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Weather } from 'src/app/weather';
import { DataService } from '../data.service';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  weather: Weather | null = null


  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.getCurrentWeather();
  }

  getCurrentWeather(){
    this.dataService.getCurrentWeather('west valley').subscribe(currentWeather => (this.weather = currentWeather));
  }
  
}
