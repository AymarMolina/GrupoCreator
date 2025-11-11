import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabservice1',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './tabservice1.component.html',
  styleUrl: './tabservice1.component.scss'
})
export class Tabservice1Component {
  baseUrl: string = environment.bases3;
  @Input() backgroundImage: string = '';
  @Input() title: string = '';
  @Input() mainImage: string = '';
  @Input() mainText: string = '';
  @Input() contentItem1Image: string = '';
  @Input() contentItem1Text: string = '';
  @Input() contentItem2Image: string = '';
  @Input() contentItem2Text: string = '';
  @Input() contentItem3Image: string = '';
  @Input() contentItem3Text: string = '';
  @Input() contentItem4Image: string = '';
  @Input() contentItem4Text: string = '';

}
