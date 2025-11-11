import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-google',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './google.component.html',
  styleUrl: './google.component.scss'
})
export class GoogleComponent {
  tabService1Data = {
    backgroundImage: 'sectiongoogle.webp',
    title: 'Google Ads',
    mainImage: 'googleprincipal.webp',
    mainText: 'Creamos campañas publicitarias efectivas en Google Ads para atraer tráfico cualificado y maximizar el retorno de la inversión.',
    contentItem1Image: 'google1.svg',
    contentItem1Text: 'Creación de Anuncios Atractivos',
    contentItem2Image: 'google2.svg',
    contentItem2Text: 'Optimización Continua',
    contentItem3Image: 'google3.svg',
    contentItem3Text: 'Investigación de Palabras Clave',
    contentItem4Image: 'google4.svg',
    contentItem4Text: 'Reportes Detallados'
  };
}
