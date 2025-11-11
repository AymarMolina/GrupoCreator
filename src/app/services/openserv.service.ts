// shared.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Openserv {
  Eti1 = true;
  Eti2 = false;
  Eti3 = false;
  Eti4 = false;
  Eti5 = false;

  Eti1Serv = true;
  Eti2Serv = false;
  Eti3Serv = false;
  eti(num: number) {
    this.Eti1 = false;
    this.Eti2 = false;
    this.Eti3 = false;
    this.Eti4 = false;
    this.Eti5 = false;

    switch (num) {
      case 1:
        this.Eti1 = true;
        break;
      case 2:
        this.Eti2 = true;
        break;
      case 3:
        this.Eti3 = true;
        break;
      case 4:
        this.Eti4 = true;
        break;
      case 5:
        this.Eti5 = true;
        break;
      default:
        break;
    }
  }
  servi(num: number) {
    this.Eti1Serv = false;
    this.Eti2Serv = false;
    this.Eti3Serv = false;
    this.Eti1 = true;
    this.Eti2 = false;
    this.Eti3 = false;
    this.Eti4 = false;
    this.Eti5 = false;
    switch (num) {
      case 1:
        this.Eti1Serv = true;
        break;
      case 2:
        this.Eti2Serv = true;
        break;
      case 3:
        this.Eti3Serv = true;
        break;
      default:
        break;
    }
  }
}
