import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImgDivService {
  constructor() {}

  genrateChar(name: string): string {
    return name?.charAt(0).toUpperCase();
  }

  chooseColor(name: string): any {
    let color;
    var key = name?.toLowerCase().charAt(0);
    switch (key) {
      case 'a': {
        color = '#374045';
        break;
      }
      case 'b': {
        color = '#222831';
        break;
      }
      case 'c': {
        color = '#ff4646';
        break;
      }
      case 'd': {
        color = '#272343';
        break;
      }
      case 'e': {
        color = '#008891';
        break;
      }
      case 'f': {
        color = '#fdb827';
        break;
      }
      case 'g': {
        color = '#351f39';
        break;
      }
      case 'h': {
        color = '#54e346';
        break;
      }
      case 'i': {
        color = '#204051';
        break;
      }
      case 'j': {
        color = '#007965';
        break;
      }
      case 'k': {
        color = '#1e212d';
        break;
      }
      case 'l': {
        color = '#0a043c';
        break;
      }
      case 'm': {
        color = '#0f1123';
        break;
      }
      case 'n': {
        color = '#153e90';
        break;
      }
      case 'o': {
        color = '#fecd1a';
        break;
      }
      case 'p': {
        color = '#314e52';
        break;
      }
      case 'q': {
        color = '#01c5c4';
        break;
      }
      case 'r': {
        color = '#5d54a4';
        break;
      }
      case 's': {
        color = '#e45826';
        break;
      }
      case 't': {
        color = '#4d375d';
        break;
      }
      case 'u': {
        color = '#16c79a';
        break;
      }
      case 'v': {
        color = '#c70039';
        break;
      }
      case 'w': {
        color = '#ca431d';
        break;
      }
      case 'x': {
        color = '#ff5722';
        break;
      }
      case 'y': {
        color = '#cdb30c';
        break;
      }
      case 'z': {
        color = '#d2e603';
        break;
      }
    }

    return color;
  }

  nameToCaptial(name: string): string {
    return name?.charAt(0).toUpperCase() + name.slice(1);
  }
}
