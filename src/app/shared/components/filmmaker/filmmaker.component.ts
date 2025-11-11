import { Component } from '@angular/core';
import { Tabservice1Component } from '../tabservice1/tabservice1.component';

@Component({
  selector: 'app-filmmaker',
  standalone: true,
  imports: [Tabservice1Component],
  templateUrl: './filmmaker.component.html',
  styleUrl: './filmmaker.component.scss'
})
export class FilmmakerComponent {
  tabService1Data = {
    backgroundImage: 'sectionfilmaker.webp',
    title: 'Filmmaker',
    mainImage: 'filmakerimgprincipal.webp',
    mainText: 'Creamos contenido audiovisual de alta calidad que cuenta historias, capta la atención de tu audiencia y fortalece la identidad de tu marca.',
    contentItem1Image: 'fil1.svg',
    contentItem1Text: 'Conceptualización',
    contentItem2Image: 'fil2.svg',
    contentItem2Text: 'Producción',
    contentItem3Image: 'fil4.svg',
    contentItem3Text: 'Preproducción',
    contentItem4Image: 'fil3.svg',
    contentItem4Text: 'Postproducción'
  };
}
