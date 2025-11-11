import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-socialmedia',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './socialmedia.component.html',
  styleUrl: './socialmedia.component.scss'
})
export class SocialmediaComponent {
  tabService1Data = {
    backgroundImage: 'sectionsocial.webp',
    title: 'Social Media',
    mainImage: 'socialprincipal.webp',
    mainText: 'Gestionamos tus redes sociales para aumentar la visibilidad de tu marca, mejorar la interacción con los clientes y generar leads cualificados.',
    contentItem1Image: 'social1.svg',
    contentItem1Text: 'Gestión de Contenido',
    contentItem2Image: 'social2.svg',
    contentItem2Text: 'Interacción con la Comunidad',
    contentItem3Image: 'social4.svg',
    contentItem3Text: 'Publicidad en Redes Sociales',
    contentItem4Image: 'social3.svg',
    contentItem4Text: 'Estrategia Personalizada'
  };
}
