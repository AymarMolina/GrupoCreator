import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronComponent } from './dron.component';

describe('DronComponent', () => {
  let component: DronComponent;
  let fixture: ComponentFixture<DronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
