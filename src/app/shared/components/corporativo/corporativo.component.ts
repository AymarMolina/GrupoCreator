import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-corporativo',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './corporativo.component.html',
  styleUrl: './corporativo.component.scss'
})
export class CorporativoComponent {
  tabService1Data = {
    backgroundImage: 'sectioncor.webp',
    title: 'Reportero Corporativo',
    mainImage: 'corprincipal.webp',
    mainText: 'Nuestros reporteros expertos capturan la esencia de tu evento corporativo, proporcionando cobertura detallada y profesional que resalta los momentos claves.',
    contentItem1Image: 'cor1.svg',
    contentItem1Text: 'Entrevistas Exclusivas',
    contentItem2Image: 'cor2.svg',
    contentItem2Text: 'Contenido Multimedia',
    contentItem3Image: 'cor3.svg',
    contentItem3Text: 'Artículos y Blogs',

  };
}
