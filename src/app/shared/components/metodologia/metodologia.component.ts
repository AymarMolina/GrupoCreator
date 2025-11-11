import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import  AOS from 'aos';
import { Openserv } from '../../../services/openserv.service';

@Component({
  selector: 'app-metodologia',
  standalone: true,
  imports: [],
  templateUrl: './metodologia.component.html',
  styleUrl: './metodologia.component.scss'
})
export class MetodologiaComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();

    }
  }
  
}
