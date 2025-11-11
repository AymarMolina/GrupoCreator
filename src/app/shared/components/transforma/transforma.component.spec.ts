import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformaComponent } from './transforma.component';

describe('TransformaComponent', () => {
  let component: TransformaComponent;
  let fixture: ComponentFixture<TransformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
