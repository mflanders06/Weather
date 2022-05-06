import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Weather } from 'src/app/weather';
import { Coord } from '../coord';
import { DataService } from '../data.service';
import { FullReport } from '../fullReport';
import { OneCall } from '../oneCall';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  weather: OneCall | null = null

  position: GeolocationPosition | null = null

  coordinates: Coord = {name: "West Valley City",
                          lat: 40.696629,
                          lon: -111.9867271
                       }


  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.getBrowserLocation();
    this.getWeather();
  }
  
  getWeather(){
    const coord: Coord = {
      lat: this.position?.coords.latitude || 40,
      lon: this.position?.coords.longitude || -112
    }
    this.dataService.getWeather(coord).subscribe(weather => this.weather = weather)
  }

  getBrowserLocation(){
    navigator.geolocation.getCurrentPosition(position => this.position = position)
  }

  getCoordFromPosition(){
    
  }


}
