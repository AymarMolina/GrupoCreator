import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabacionComponent } from './grabacion.component';

describe('GrabacionComponent', () => {
  let component: GrabacionComponent;
  let fixture: ComponentFixture<GrabacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrabacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrabacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
