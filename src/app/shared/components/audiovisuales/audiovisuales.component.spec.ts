import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiovisualesComponent } from './audiovisuales.component';

describe('AudiovisualesComponent', () => {
  let component: AudiovisualesComponent;
  let fixture: ComponentFixture<AudiovisualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudiovisualesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiovisualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
