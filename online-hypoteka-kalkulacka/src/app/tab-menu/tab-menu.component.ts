import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {route1, route2, route3} from '../app.routes';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})

export class TabMenuComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Co je hypotéka', icon: 'fa fa-fw fa-bar-chart', routerLink: [route1]},
      {label: 'Jak se splácí hypotéka', icon: 'fa fa-fw fa-calendar', routerLink: [route2]},
      {label: 'Hypotéční kalkulačka', icon: 'fa fa-fw fa-book', routerLink: [route3]},
    ];
  }

}
