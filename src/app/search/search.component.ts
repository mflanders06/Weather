import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Coord } from '../coord';
import { DataService } from '../data.service';
import { FullReport } from '../fullReport';
import { OneCall } from '../oneCall';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    citySearch: new FormControl("West Valley City", [Validators.required]),
    searchByOption: new FormControl("City")
  })

  searchBy: string[] = ['City', 'Zip']

  searchedWeather: OneCall | null = null;

  coordinates: Coord | null = null;

  get selectedSearchOption(){
    return this.formGroup.get('searchByOption')?.value
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.changeDefaultText()
  }

  getCoords(){
    const {value} = this.formGroup
    this.dataService.getCoords(value).subscribe(coords => {
      this.getWeather(coords)
      this.coordinates = coords
    })
  }

  getWeather(coords: Coord){
    this.dataService.getWeather(coords).subscribe(weather => this.searchedWeather = weather)
  }

  changeDefaultText(){
    this.formGroup.get('searchByOption')?.valueChanges.subscribe(changes => {
      switch(changes){
        case 'City': 
          this.formGroup.get('citySearch')?.setValue('West Valley City')
          break
        case 'Zip':
          this.formGroup.get('citySearch')?.setValue('84043')
          break
      }
    })
  }

}
