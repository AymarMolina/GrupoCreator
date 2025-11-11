import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-diseno',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './diseno.component.html',
  styleUrl: './diseno.component.scss'
})
export class DisenoComponent {
  tabService1Data = {
    backgroundImage: 'secdiseño.webp',
    title: 'Diseño UX/UI',
    mainImage: 'diseño.webp',
    mainText: 'Diseñamos páginas web y aplicaciones móviles que no solo son visualmente atractivas, sino que también ofrecen una experiencia de usuario excepcional, optimizando la conversión y la retención de clientes.',
    contentItem1Image: 'celulares.svg',
    contentItem1Text: 'Diseño Responsive',
    contentItem2Image: 'estructura.svg',
    contentItem2Text: 'Estructura Intuitiva',
    contentItem3Image: 'optimi.svg',
    contentItem3Text: 'Optimización de velocidad',
    contentItem4Image: 'seo.svg',
    contentItem4Text: 'SEO Integrado'
  };
}
