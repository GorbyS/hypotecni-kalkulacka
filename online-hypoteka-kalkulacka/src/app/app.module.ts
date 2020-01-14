import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SliderComponent} from './slider/slider.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartComponent} from './chart/chart.component';
import {SliderModule} from 'primeng/slider';
import {ToastModule} from 'primeng/toast';
import {ChartModule} from 'primeng/chart';
import {MessageService} from 'primeng/api';
import {AccordionComponent} from './accordion/accordion.component';
import {AccordionModule} from 'primeng/accordion';
import {TabMenuComponent} from './tab-menu/tab-menu.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';
import {TabContent1Component} from './tab-content1/tab-content1.component';
import {TabContent2Component} from './tab-content2/tab-content2.component';
import {TabContent3Component} from './tab-content3/tab-content3.component';
import {CardModule} from 'primeng/card';
import {Card1Component} from './card1/card1.component';
import {FormatNumberPipe} from './pipes/format-number.pipe';
import {registerLocaleData} from '@angular/common';
import localeCs from '@angular/common/locales/cs';
import localeDe from '@angular/common/locales/de';
import {InputGroupComponent} from './input-group/input-group.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import {RadioButtonModule} from 'primeng/radiobutton';

registerLocaleData(localeCs, 'cs');
registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ChartComponent,
    AccordionComponent,
    TabMenuComponent,
    TabContent1Component,
    TabContent2Component,
    TabContent3Component,
    Card1Component,
    SliderComponent,
    FormatNumberPipe,
    InputGroupComponent,
    RadioButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SliderModule,
    ToastModule,
    ChartModule,
    AccordionModule,
    TabMenuModule,
    RouterModule,
    AppRoutes,
    CardModule,
    RadioButtonModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
