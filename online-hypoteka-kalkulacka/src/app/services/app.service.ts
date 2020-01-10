import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public data;
  private _firstSliderValue: number;
  get firstSliderValue(): number {
    return this._firstSliderValue;
  }

  set firstSliderValue(value: number) {
    this._firstSliderValue = value;
    let out = this.createData();
    for (let i = 0; i < 7; i++) {
      out.datasets[0].data[i] = i * this._firstSliderValue;
      out.datasets[1].data[i] = Math.pow(i * this._firstSliderValue, 1.5);
    }
    this.data = out;
  }

  constructor() {
    this.firstSliderValue = 20;
  }

  public createData() {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [0, 0, 0, 0, 0, 0, 0],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [0, 0, 0, 0, 0, 0, 0],
          fill: false,
          borderColor: '#565656'
        }
      ]
    };
  }
}
