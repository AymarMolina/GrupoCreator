import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import  AOS from 'aos';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  baseUrl: string = 'api.whatsapp.com/send';
  phoneNumber: string = '+51 940 358 107';

  redirectToWhatsApp(plan: string): void {
    const message = `Hola! Me gustaría obtener más información sobre el Plan ${plan}. Estoy interesado en saber cómo este plan puede ayudar a mi negocio a crecer y cuáles son los servicios específicos que incluye. ¡Gracias!`;
    const url = `https://${this.baseUrl}?phone=${this.phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();

    }
  }
}
