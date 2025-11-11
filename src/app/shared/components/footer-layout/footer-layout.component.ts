import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router, RouterLink } from '@angular/router';
import { Openserv } from '../../../services/openserv.service';


@Component({
  selector: 'app-footer-layout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-layout.component.html',
  styleUrl: './footer-layout.component.scss'
})
export class FooterLayoutComponent {

  showButton = false;
  baseUrl: string = environment.bases3;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router,private dataService: Openserv) { }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    }
  }
  toform() {
    document.getElementById("formulario")?.scrollIntoView();
  }
  tometodologia() {
    document.getElementById("metodologia")?.scrollIntoView();
  }
  tonosotros() {
    document.getElementById("nosotros")?.scrollIntoView();
  }
  toservicio() {
    document.getElementById("section")?.scrollIntoView();
  }
  llamarEti(num: number,num2:number) {
    
    this.servi(num2)
    this.dataService.eti(num)
  }
  servi(num: number) {
    this.dataService.servi(num);
    this.servicios()
  }
 
  
  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
  openUrl(url: string): void {
    window.open(url, '_blank');
  }
  navigateTo(tabId: string) {
    this.scrollToTop()
    this.router.navigate(['/servicios']).then(() => {
      const tab = document.getElementById(tabId);
      if (tab) {
        tab.click();
      }
    });
  }
  servicios() {
    document.getElementById("section")?.scrollIntoView();
  }


}
