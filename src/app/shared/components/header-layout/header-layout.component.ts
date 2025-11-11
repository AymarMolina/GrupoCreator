import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.scss'
})
export class HeaderLayoutComponent {
  baseUrl: string = environment.bases3;


  activeLink: string = 'inicio';

  constructor(private renderer: Renderer2) {}

  toform() {
    document.getElementById("formulario")?.scrollIntoView();
  }
  toinicio() {
    document.getElementById("inicio")?.scrollIntoView();
  }
  tonosotros() {
    document.getElementById("nosotros")?.scrollIntoView();
  }
  soyemprendedor() {
    document.getElementById("emprendedor")?.scrollIntoView();
  }
  servicios() {
    document.getElementById("section")?.scrollIntoView();
  }

  setActive(link: string) {
    this.activeLink = link;
  }

  closeNavbar() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }
}