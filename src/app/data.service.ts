import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/weather';
import { API_KEY } from '../../config';
import { Coord } from './coord';
import { FiveDay } from './fiveDay';
import { OneCall } from './oneCall';
import { FullReport } from './fullReport';

const URL='https://api.openweathermap.org/'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<Weather>{
    const url = `${URL}data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    return this.http.get<Weather>(url)
  }

  get7Day(lat: number=40.69, lon: number=-112): Observable<OneCall>{ //lat and lon can be passed in, but default to West Valley City
    //api call parameters:
    //lat = latitude (numerical, north is positive, south is negative)
    //lon = longitude (numerical, east is positive, west is negative)
    //units = unit of measre for temp. options are standard (K), metric (C), imperial (F)
    //appid = api key
    //exclude = data to exclude from the api call. Options are: current, minutely, hourly, daily, alerts.
    //          multiples should be comma separated (no space)
    const url = `${URL}data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&minutely,hourly,alerts&units=imperial&appid=${API_KEY}`
    return this.http.get<OneCall>(url)
  }

  /*postStuff(){
  this.http.post<any>(url, body)
  }*/

  getCoordCity(city: string): Observable<Coord>{
    //api call parameters:
    //lat = latitude (numerical, north is positive, south is negative)
    //lon = longitude (numerical, east is positive, west is negative)
    //limit = how many cities to return (we're only pulling 1)
    //appid = api key
    const url = `${URL}geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    return this.http.get<Coord>(url)
  }

  getCoordZip(zip: number): Observable<Coord>{
    //api call parameters - see getCoordCity
    const url = `${URL}geo/1.0/zip?zip=${zip},GB&appid=${API_KEY}`
    return this.http.get<Coord>(url)
  }

  getCoords(searched: {citySearch: string, searchByOption: string}): Observable<Coord>{
    return searched.searchByOption === 'City' ? this.getCoordCity(searched.citySearch) : this.getCoordZip(Number(searched.citySearch))
  }

  getWeather(coord: Coord): Observable<OneCall>{
    const url = `${URL}data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=imperial&minutely,hourly,alerts&units=imperial&appid=${API_KEY}`
    return this.http.get<OneCall>(url)
  }

}
