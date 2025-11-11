import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-personalizadas',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './personalizadas.component.html',
  styleUrl: './personalizadas.component.scss'
})
export class PersonalizadasComponent {
  tabService1Data = {
    backgroundImage: 'sectionper.webp',
    title: 'Capacitaciones Personalizadas',
    mainImage: 'perprincipal.webp',
    mainText: 'Ofrecemos capacitaciones personalizadas que se adaptan a los requisitos específicos, asegurando aprendizaje efectivo y relevante tanto para el crecimiento empresarial como personal.',
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
