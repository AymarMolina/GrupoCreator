import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabservice1Component } from './tabservice1.component';

describe('Tabservice1Component', () => {
  let component: Tabservice1Component;
  let fixture: ComponentFixture<Tabservice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabservice1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabservice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
