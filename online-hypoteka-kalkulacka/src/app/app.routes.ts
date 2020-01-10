import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TabContent1Component} from './tab-content1/tab-content1.component';
import {TabContent2Component} from './tab-content2/tab-content2.component';
import {TabContent3Component} from './tab-content3/tab-content3.component';

export const route1 = 'mortgage';
export const route2 = 'how-to-pay';
export const route3 = 'calculator';

export const routes: Routes = [
  {path: route1, component: TabContent1Component},
  {path: route2, component: TabContent2Component},
  {path: route3, component: TabContent3Component},
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
