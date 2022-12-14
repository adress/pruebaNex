import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent {

  operacion = '+';
  resultado: number | null = null;
  mensajes: string[] = [];


  callOperacion() {
    const mensajesLocal = [];

    let numero1 = (document.querySelector("#numero1") as HTMLInputElement).value;
    let numero2 = (document.querySelector("#numero2") as HTMLInputElement).value;

    if (!numero1) {
      numero1 = '1';
      mensajesLocal.push('Como el numero 1 no fue asigando tomara por defecto el valor de 1')
    }
    if (!numero2) {
      numero2 = '1';
      mensajesLocal.push('Como el numero 2 no fue asigando tomara por defecto el valor de 1')
    }

    this.mensajes = [...mensajesLocal];
    this.realizarOperacion(+numero1, +numero2);
  }

  realizarOperacion(numero1 = 1, numero2 = 1) {
    switch (this.operacion) {
      case '+':
        this.resultado = (numero1) + (numero2);
        break;
      case '-':
        this.resultado = (numero1) - (numero2);
        break;
      case '*':
        this.resultado = (numero1) * (numero2);
        break;
      case '/':
        this.resultado = (numero1) / (numero2);
        break;
    }
  }
}
