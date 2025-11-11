import { Component } from '@angular/core';
import { FormularioComponent } from '../../../shared/components/formulario/formulario.component';
import { TransformaComponent } from '../../../shared/components/transforma/transforma.component';
import { CardsComponent } from '../../../shared/components/cards/cards.component';
import { InnovacionComponent } from '../../../shared/components/innovacion/innovacion.component';
import { MetodologiaComponent } from '../../../shared/components/metodologia/metodologia.component';
import { EstrategicoComponent } from '../../../shared/components/estrategico/estrategico.component';
import { CrecerComponent } from '../../../shared/components/crecer/crecer.component';
import { ServiciosComponent } from "../../../shared/components/servicios/servicios.component";



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormularioComponent, TransformaComponent, CardsComponent, InnovacionComponent, MetodologiaComponent, EstrategicoComponent, CrecerComponent, ServiciosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  
  


}
