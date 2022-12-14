import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent {
  arrayString: string = '["Bogota", "Cali", "Bogota", "Medellin", "Bogota", "Medellin", "Bogota", "Cali", "Bogota", "Neiva", "Bogota", "Cali", "Bogota", "Medellin"]';
  arrayToWork: string[] = [];
  ciudades: string[] = [];
  mensajes: string[] = [];

  constructor() {
    this.convertStringToArray();
    this.ciudades = this.frequencySort(this.arrayToWork).slice(0, 5);
  }

  convertStringToArray() {
    this.mensajes = [];
    try {
      this.arrayToWork = JSON.parse(this.arrayString);
    } catch (error) {
      this.mensajes = ['Array Invalido'];
      this.arrayToWork = [];
      this.ciudades = [];
    }
  }

  frequencySort(arr: string[]) {
    const countOccurrences = (arr: string[], val: string) =>
      arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

    let arrayAux: any = {}; //key-value array
    arr.forEach((i: string, index) => arrayAux[i] = {
      'num': countOccurrences(arr, i),
      'i': index
    });

    arr.sort(function (a, b) {
      let diff = arrayAux[b].num - arrayAux[a].num;
      if (diff == 0)
        diff = arrayAux[b].i - arrayAux[a].i;
      return diff;
    })

    return [...new Set(arr)]
  }

  convertirArreglo() {
    this.convertStringToArray();
    this.ciudades = this.frequencySort(this.arrayToWork).slice(0, 5);
  }
}
