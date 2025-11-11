import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.scss'
})
export class BrandingComponent {
  tabService1Data = {
    backgroundImage: 'sectionbrand.webp',
    title: 'Branding',
    mainImage: 'brandprincipal.webp',
    mainText: 'Creamos y fortalecemos la identidad visual de tu marca para asegurar que tu negocio se destaque en un mercado competitivo.',
    contentItem1Image: 'brand1.svg',
    contentItem1Text: 'Estrategia de Marca',
    contentItem2Image: 'brand2.svg',
    contentItem2Text: 'Guía de Estilo de Marca',
    contentItem3Image: 'brand3.svg',
    contentItem3Text: 'Diseño de Identidad Visual',
    contentItem4Image: 'brand4.svg',
    contentItem4Text: 'Creación de Mensajes de Marca'
  };
}
