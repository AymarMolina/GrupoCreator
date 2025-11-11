import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategicoComponent } from './estrategico.component';

describe('EstrategicoComponent', () => {
  let component: EstrategicoComponent;
  let fixture: ComponentFixture<EstrategicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstrategicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
