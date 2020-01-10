import {Component, OnInit} from '@angular/core';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
  val = 200000;
  // val1: number;
  // val3: number;
  // range: number[] = [20, 100];

  constructor(public appService: AppService) {
  }

  /*  constructor(private readonly formatNumber: FormatNumberPipe) {
    }*/

  ngOnInit() {
  }

  /*  formatNumbers(value: number) {
      console.log(this.formatNumber.transform(value, null));
      return this.formatNumber.transform(value, null);
    }*/
}

