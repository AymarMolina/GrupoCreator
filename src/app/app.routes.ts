import { Routes,RouterModule } from '@angular/router';
import { LandingLayoutComponent } from './shared/components/landing-layout/landing-layout.component';
export const routes: Routes = [
    {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingLayoutComponent,
    loadChildren: () => import('./pages/landing/landing.routes').then(m => m.LandingRoutes)
  },
 
];
export const AppRoutes=RouterModule.forRoot(routes)
