import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleVueloComponent } from './ver-detalle-vuelo.component';

describe('VerDetalleVueloComponent', () => {
  let component: VerDetalleVueloComponent;
  let fixture: ComponentFixture<VerDetalleVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDetalleVueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetalleVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
