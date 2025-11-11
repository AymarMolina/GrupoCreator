import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.scss'
})
export class VentasComponent {
  tabService1Data = {
    backgroundImage: 'sectionventas.webp',
    title: 'Incremento de Ventas',
    mainImage: 'ventasprincipal.webp',
    mainText: 'Recibirás formación especializada para fortalecer tu marca y desarrollar habilidades esenciales que impulsarán tu negocio.',
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
