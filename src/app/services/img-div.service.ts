import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImgDivService {
  colors = [
    '#374045',
    '#008891',
    '#ff4646',
    '#272343',
    '#222831',
    '#fdb827',
    '#351f39',
    '#54e346',
    '#204051',
    '#007965',
  ];

  constructor() {}

  genrateChar(name: string): string {
    return name.charAt(0).toUpperCase();
  }

  chooseColor(): string {
    return this.colors[Math.floor(Math.random() * 10)];
  }

  nameToCaptial(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
