import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarketingDigitalComponent } from "../marketing-digital/marketing-digital.component";
import { AudiovisualesComponent } from "../audiovisuales/audiovisuales.component";
import { WorkshopComponent } from "../workshop/workshop.component";
import { Openserv } from '../../../services/openserv.service';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, MarketingDigitalComponent, AudiovisualesComponent, WorkshopComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  constructor(private dataService: Openserv, public sharedService: Openserv) {}
  aux:number=-1
  llamarEti(num: number) {
    this.aux=this.getIndiceElementoActivo();
    this.dataService.servi(num);

    const etiquetas = document.querySelectorAll('.etiquetas1 a');

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
    if(indiceElementoActivo+this.aux===2){
      if(indiceElementoActivo>this.aux){
        this.activateAnimationLarge(this.aux);
        this.activateAnimationLLarge(indiceElementoActivo)
      }else if(indiceElementoActivo<this.aux){
        this.activateAnimationLarge(indiceElementoActivo);
        this.activateAnimationLLarge(this.aux)
      }
      
    }else{
      if(indiceElementoActivo>this.aux){
        this.activateAnimation(this.aux);
        this.activateAnimationL(indiceElementoActivo)
      }else if(indiceElementoActivo<this.aux){
        this.activateAnimation(indiceElementoActivo);
        this.activateAnimationL(this.aux)
      }
    }
    
    
    
  }
  getIndiceElementoActivo(): number {
    const etiquetas = document.querySelectorAll('.etiquetas1 a');

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
    const botonSeleccionado = document.querySelectorAll('.etiquetas1 a')[num];

    botonSeleccionado.classList.add('button-animating');

    setTimeout(() => {
      botonSeleccionado.classList.remove('button-animating');
    }, 500);
  }
  activateAnimationLarge(num: number) {
    const botonSeleccionado = document.querySelectorAll('.etiquetas1 a')[num];
    const botonSeleccionado2 = document.querySelectorAll('.etiquetas1 a')[num+1];

    botonSeleccionado.classList.add('button-animatingLarge');
    botonSeleccionado2.classList.add('button-animating');

    setTimeout(() => {
      botonSeleccionado.classList.remove('button-animatingLarge');
      botonSeleccionado2.classList.remove('button-animating');
    }, 500);
  }
  activateAnimationL(num: number) {
    const botonSeleccionado = document.querySelectorAll('.etiquetas1 a')[num];

    botonSeleccionado.classList.add('button-animatingL');

    setTimeout(() => {
      botonSeleccionado.classList.remove('button-animatingL');
    }, 500);
  }
  activateAnimationLLarge(num: number) {
    const botonSeleccionado = document.querySelectorAll('.etiquetas1 a')[num];
    const botonSeleccionado2 = document.querySelectorAll('.etiquetas1 a')[num-1];

    botonSeleccionado.classList.add('button-animatingLLarge');
    botonSeleccionado2.classList.add('button-animatingL');

    setTimeout(() => {
      botonSeleccionado.classList.remove('button-animatingLLarge');
      botonSeleccionado2.classList.remove('button-animatingL');
    }, 500);
  }
}
