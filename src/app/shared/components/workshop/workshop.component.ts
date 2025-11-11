import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VentasComponent } from "../ventas/ventas.component";
import { BuscadoresComponent } from "../buscadores/buscadores.component";
import { DigitalComponent } from "../digital/digital.component";
import { PersonalizadasComponent } from "../personalizadas/personalizadas.component";
import { Openserv } from '../../../services/openserv.service';

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [CommonModule, VentasComponent, BuscadoresComponent, DigitalComponent, PersonalizadasComponent],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.scss'
})
export class WorkshopComponent implements OnInit{
  constructor(private dataService: Openserv, public sharedService: Openserv) {
   
  }
  ngOnInit(): void {
    this.showContent(0)
  }
  aux:number=-1
  llamarEti(num: number) {
    this.aux=this.getIndiceElementoActivo();
    this.dataService.eti(num);

    const etiquetas = document.querySelectorAll('.etiquetas3 a');

    etiquetas.forEach((elemento, indice) => {
      if (indice === num - 1) { 
        elemento.classList.add('active');
      } else {
        elemento.classList.remove('active');
      }
    });


    let indiceElementoActivo = -1;
    etiquetas.forEach((elemento, indice) => {
      if (elemento.classList.contains('active')) {
        indiceElementoActivo = indice;
        return; 
      }
    });
      if(indiceElementoActivo>this.aux){
        this.activateAnimation(this.aux);
        this.activateAnimationL(indiceElementoActivo)
        this.showContent(indiceElementoActivo)
        this.hideContnet(this.aux)
      }else if(indiceElementoActivo<this.aux){
        this.activateAnimation(indiceElementoActivo);
        this.activateAnimationL(this.aux)
        this.showContent(indiceElementoActivo)
        this.hideContnet(this.aux)
      }
  }
  getIndiceElementoActivo(): number {
    const etiquetas = document.querySelectorAll('.etiquetas3 a');

    let indiceElementoActivo = -1;
    etiquetas.forEach((elemento, indice) => {
      if (elemento.classList.contains('active')) {
        indiceElementoActivo = indice;
        return; 
      }
    });

    return indiceElementoActivo;
  }
  activateAnimation(num: number) {
    const botonSeleccionado = document.querySelectorAll('.etiquetas3 a')[num];

    botonSeleccionado.classList.add('button-animating');

    setTimeout(() => {
      botonSeleccionado.classList.remove('button-animating');
    }, 500);
  }
  activateAnimationback(num: number) {
    const botonSeleccionado = document.querySelectorAll('#workback #contenido')[num];

    botonSeleccionado.classList.add('button-animatingall');

    setTimeout(() => {
      botonSeleccionado.classList.remove('button-animatingall');
    }, 500);
  }
  activateAnimationL(num: number) {
    const botonSeleccionado = document.querySelectorAll('.etiquetas3 a')[num];

    botonSeleccionado.classList.add('button-animatingL');

    setTimeout(() => {
      botonSeleccionado.classList.remove('button-animatingL');
    }, 500);
  }
  showContent(num: number): void {
    const botonSeleccionado = document.querySelectorAll('.contenido1')[num];

    botonSeleccionado.classList.add('apa');

}
hideContnet(num:number):void{
  const botonSeleccionado = document.querySelectorAll('.contenido1')[num];

    botonSeleccionado.classList.remove('apa');
}
}
