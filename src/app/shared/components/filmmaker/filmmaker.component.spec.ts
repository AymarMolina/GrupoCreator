import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmmakerComponent } from './filmmaker.component';

describe('FilmmakerComponent', () => {
  let component: FilmmakerComponent;
  let fixture: ComponentFixture<FilmmakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmmakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
