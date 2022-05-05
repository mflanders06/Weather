import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FiveDay } from '../fiveDay';

@Component({
  selector: 'app-five-day',
  templateUrl: './five-day.component.html',
  styleUrls: ['./five-day.component.scss']
})
export class FiveDayComponent implements OnInit {

  fiveDay: FiveDay | null = null

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getFiveDay()
  }

  getFiveDay(){
    this.dataService.get5Day().subscribe(fiveDay => (this.fiveDay = fiveDay));
    console.log(this.fiveDay)
  }

}
