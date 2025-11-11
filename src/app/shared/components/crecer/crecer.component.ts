import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ComponentStateService } from '../../../services/component-state.service';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-crecer',
  standalone: true,
  imports: [],
  templateUrl: './crecer.component.html',
  styleUrl: './crecer.component.scss'
})
export class CrecerComponent {
  baseUrl: string = environment.bases3;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.whatsappLink = this.generateWhatsAppLink('+51 940 358 107', 'Hola Grupo Monter, espero se encuentren bien. Estoy interesado en sus servicios y me gustaría obtener más información. ¿Podrían ayudarme con esto? ¡Gracias!');
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200

      });

    }
  }
  whatsappLink: string;



  private generateWhatsAppLink(phone: string, message: string): string {
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  }
}
