import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-buscadores',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './buscadores.component.html',
  styleUrl: './buscadores.component.scss'
})
export class BuscadoresComponent {
  tabService1Data = {
    backgroundImage: 'sectionbus.webp',
    title: 'Posicionamiento en buscadores',
    mainImage: 'busprincipal.webp',
    mainText: 'Especializados en SEO para emprendedores y empresas. Estos talleres están diseñados para enseñar estrategias avanzadas que optimizan la visibilidad en buscadores, aumentan el tráfico cualificado y fortalecen la presencia online de tu negocio.',
    contentItem1Image: 'works1.svg',
    contentItem1Text: 'Instructores Expertos',
    contentItem2Image: 'works2.svg',
    contentItem2Text: 'Materiales de Apoyo',
    contentItem3Image: 'works3.svg',
    contentItem3Text: 'Experiencia Práctica',
    contentItem4Image: 'works4.svg',
    contentItem4Text: 'Networking'
  };
}
