import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import  AOS from 'aos';

@Component({
  selector: 'app-innovacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './innovacion.component.html',
  styleUrl: './innovacion.component.scss'
})
export class InnovacionComponent {
  baseUrl: string = environment.bases3;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();

    }
  }
}
