import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/weather';
import { API_KEY } from '../../config';
import { FiveDay } from './fiveDay';

const URL='https://api.openweathermap.org/data/2.5/'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<Weather>{
    const url = `${URL}weather?q=${city}&units=imperial&appid=${API_KEY}`
    return this.http.get<any>(url)
  }

  get5Day(lat: number=40.69, lon: number=112): Observable<FiveDay>{
    const url = `${URL}forecast/daily?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
    return this.http.get<any>(url)
  }

}
