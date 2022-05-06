import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Weather } from 'src/app/weather';
import { DataService } from '../data.service';
import { FullReport } from '../fullReport';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  weather: Weather | null = null

  sevenDayWeather: FullReport | null = null


  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.getCurrentWeather();
    this.getWeather();
  }

  getCurrentWeather(){
    this.dataService.getCurrentWeather('west valley').subscribe(currentWeather => (this.weather = currentWeather));
  }
  
  getWeather(){
    this.dataService.getSearchedWeather({}).subscribe(sevenDayWeather => this.sevenDayWeather = sevenDayWeather)
  }

}
