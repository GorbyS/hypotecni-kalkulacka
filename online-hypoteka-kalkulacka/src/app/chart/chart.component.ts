import {Component, OnInit} from '@angular/core';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  constructor(public appService: AppService) {
  }

  ngOnInit() {

  }

}
