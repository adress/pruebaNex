import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent {

  arrayString: string = '[[1, 2], [3, 4], [5, 6]]';
  arrayToWork: string[] = [];
  flatArray: string[] = [];
  mensajes: string[] = [];

  constructor() {
    this.convertStringToArray();
    this.flatArray = this.unificarArray(this.arrayToWork);
  }

  convertStringToArray() {
    this.mensajes = [];
    try {
      this.arrayToWork = JSON.parse(this.arrayString);
    } catch (error) {
      this.mensajes = ['Array Invalido'];
      this.arrayToWork = [];
      this.flatArray = [];
    }
  }

  unificarArray(arr: string[]) {
    return arr.flat();
  }

  convertirArreglo() {
    this.convertStringToArray();
    this.flatArray = this.unificarArray(this.arrayToWork);
  }
}
