import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentStateService {

  private activeComponent = new BehaviorSubject<string>('');
  activeComponent$ = this.activeComponent.asObservable();

  setActiveComponent(componentName: string) {
    this.activeComponent.next(componentName);
  }
}
