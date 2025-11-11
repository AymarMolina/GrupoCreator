import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import  AOS from 'aos';

@Component({
  selector: 'app-transforma',
  standalone: true,
  imports: [],
  templateUrl: './transforma.component.html',
  styleUrl: './transforma.component.scss'
})
export class TransformaComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { 
    this.whatsappLink = this.generateWhatsAppLink('+51 940 358 107', 'Hola Grupo Monter, espero se encuentren bien. Estoy interesado en sus servicios y me gustaría obtener más información. ¿Podrían ayudarme con esto? ¡Gracias!');
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();

    }
  }
  whatsappLink: string;
  private generateWhatsAppLink(phone: string, message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  }
}
