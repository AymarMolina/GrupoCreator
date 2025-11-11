import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';
import { ComponentStateService } from '../../../services/component-state.service';
import { isPlatformBrowser } from '@angular/common';
import  AOS from 'aos';

@Component({
  selector: 'app-estrategico',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './estrategico.component.html',
  styleUrl: './estrategico.component.scss'
})
export class EstrategicoComponent {
  baseUrl: string = environment.bases3;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();

    }
  }
}
