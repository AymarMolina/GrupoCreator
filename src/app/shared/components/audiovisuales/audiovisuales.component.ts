import { Component } from '@angular/core';
import { DronComponent } from "../dron/dron.component";
import { GrabacionComponent } from "../grabacion/grabacion.component";
import { CorporativoComponent } from "../corporativo/corporativo.component";
import { CommonModule } from '@angular/common';
import { Openserv } from '../../../services/openserv.service';

@Component({
  selector: 'app-audiovisuales',
  standalone: true,
  imports: [DronComponent, GrabacionComponent, CorporativoComponent,CommonModule],
  templateUrl: './audiovisuales.component.html',
  styleUrl: './audiovisuales.component.scss'
})
export class AudiovisualesComponent {
  constructor(private dataService: Openserv, public sharedService: Openserv) {}
  aux:number=-1
  ngOnInit(): void {
    this.showContent(0)
  }
  llamarEti(num: number) {
    this.aux=this.getIndiceElementoActivo();
    this.dataService.eti(num);

    const etiquetas = document.querySelectorAll('.etiquetas4 a');

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
    const etiquetas = document.querySelectorAll('.etiquetas4 a');

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
    const botonSeleccionado = document.querySelectorAll('.etiquetas4 a')[num];

    botonSeleccionado.classList.add('button-animating');

    setTimeout(() => {
      botonSeleccionado.classList.remove('button-animating');
    }, 500);
  }
  activateAnimationL(num: number) {
    const botonSeleccionado = document.querySelectorAll('.etiquetas4 a')[num];

    botonSeleccionado.classList.add('button-animatingL');

    setTimeout(() => {
      botonSeleccionado.classList.remove('button-animatingL');
    }, 500);
  }
  showContent(num: number): void {
    const botonSeleccionado = document.querySelectorAll('.contenido3')[num];
    botonSeleccionado.classList.add('apa');
}
hideContnet(num:number):void{
  const botonSeleccionado = document.querySelectorAll('.contenido3')[num];

    botonSeleccionado.classList.remove('apa');
}
}
