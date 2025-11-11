import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizadasComponent } from './personalizadas.component';

describe('PersonalizadasComponent', () => {
  let component: PersonalizadasComponent;
  let fixture: ComponentFixture<PersonalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
