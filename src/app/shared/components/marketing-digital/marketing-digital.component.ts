import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonEngine } from '@angular/ssr';
import { DisenoComponent } from "../diseno/diseno.component";
import { FilmmakerComponent } from "../filmmaker/filmmaker.component";
import { trigger, transition, style, animate } from '@angular/animations';
import { SocialmediaComponent } from "../socialmedia/socialmedia.component";
import { BrandingComponent } from "../branding/branding.component";
import { GoogleComponent } from '../google/google.component';
import { Openserv } from '../../../services/openserv.service';

@Component({
  selector: 'app-marketing-digital',
  standalone: true,
  imports: [CommonModule, DisenoComponent, FilmmakerComponent, SocialmediaComponent, BrandingComponent,GoogleComponent],
  templateUrl: './marketing-digital.component.html',

  styleUrl: './marketing-digital.component.scss',
})
export class MarketingDigitalComponent {

  constructor(private dataService: Openserv, public sharedService: Openserv) {}
  aux:number=-1
  llamarEti(num: number) {
    this.aux=this.getIndiceElementoActivo();
    this.dataService.eti(num);

    const etiquetas = document.querySelectorAll('.etiquetas2 a');

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
        this.hideContent(this.aux)
      }else if(indiceElementoActivo<this.aux){
        this.activateAnimation(indiceElementoActivo);
        this.activateAnimationL(this.aux)
        this.showContent(indiceElementoActivo)
        this.hideContent(this.aux)
      }
    
    
    
    
  }
  getIndiceElementoActivo(): number {
    const etiquetas = document.querySelectorAll('.etiquetas2 a');

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
    const botonSeleccionado = document.querySelectorAll('.etiquetas2 a')[num];

    botonSeleccionado.classList.add('button-animating');

    setTimeout(() => {
      botonSeleccionado.classList.remove('button-animating');
    }, 500);
  }
  activateAnimationL(num: number) {
    const botonSeleccionado = document.querySelectorAll('.etiquetas2 a')[num];

    botonSeleccionado.classList.add('button-animatingL');

    setTimeout(() => {
      botonSeleccionado.classList.remove('button-animatingL');
    }, 500);
  }
  showContent(num: number) {
    const botonSeleccionado = document.querySelectorAll('.contenido2')[num];

    botonSeleccionado.classList.add('apa');
  }
  hideContent(num: number) {
    const botonSeleccionado = document.querySelectorAll('.contenido2')[num];

    botonSeleccionado.classList.remove('apa');
  }
  
}
