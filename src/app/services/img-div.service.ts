import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImgDivService {
  colors = [
    '#16c79a',
    '#008891',
    '#cf1b1b',
    '#272343',
    '#222831',
    '#d2e603',
    '#ffd700',
    '#fd7014',
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
