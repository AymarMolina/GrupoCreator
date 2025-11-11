import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { FooterLayoutComponent } from '../footer-layout/footer-layout.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderLayoutComponent,FooterLayoutComponent ,FooterComponent],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.scss'
})
export class LandingLayoutComponent {}
