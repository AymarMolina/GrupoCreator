import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-dron',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './dron.component.html',
  styleUrl: './dron.component.scss'
})
export class DronComponent {
  tabService1Data = {
    backgroundImage: 'sectiondron.webp',
    title: 'Dron para Eventos',
    mainImage: 'dronprincipal.webp',
    mainText: 'Utilizamos tecnología de dron para ofrecerte vistas únicas y espectaculares de tu evento, añadiendo un toque dinámico y moderno a tus grabaciones y fotografías.',
    contentItem1Image: 'dron1.svg',
    contentItem1Text: 'Fotografía Aérea',
    contentItem2Image: 'dron2.svg',
    contentItem2Text: 'Postproducción',
    contentItem3Image: 'dron3.svg',
    contentItem3Text: 'Videografía Aérea',

  };
}
