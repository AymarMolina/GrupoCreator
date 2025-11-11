import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-digital',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './digital.component.html',
  styleUrl: './digital.component.scss'
})
export class DigitalComponent {
  tabService1Data = {
    backgroundImage: 'sectiondigital.webp',
    title: 'Marketing Digital',
    mainImage: 'digitalprincipal.webp',
    mainText: 'Aprenderás técnicas avanzadas que optimizan estrategias digitales, mejoran la efectividad de las campañas y fortalecen tu presencia online.',
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
