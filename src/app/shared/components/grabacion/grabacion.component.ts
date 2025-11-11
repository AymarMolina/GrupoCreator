import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-grabacion',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './grabacion.component.html',
  styleUrl: './grabacion.component.scss'
})
export class GrabacionComponent {
  tabService1Data = {
    backgroundImage: 'sectiogra.webp',
    title: 'Grabación de Eventos',
    mainImage: 'graprincipal.webp',
    mainText: 'Capturamos momentos especiales de tu evento con alta calidad y profesionalismo, asegurando que cada detalle sea inmortalizado para su posterior uso promocional o documental.',
    contentItem1Image: 'gra1.svg',
    contentItem1Text: 'Planificación y Preparación',
    contentItem2Image: 'gra2.svg',
    contentItem2Text: 'Edición Creativa',
    contentItem3Image: 'gra3.svg',
    contentItem3Text: 'Grabación Profesional',
    contentItem4Image: 'gra4.svg',
    contentItem4Text: 'Entrega Personalizada'
  };
}
