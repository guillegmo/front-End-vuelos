import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramarVueloComponent } from './programar-vuelo.component';

describe('ProgramarVueloComponent', () => {
  let component: ProgramarVueloComponent;
  let fixture: ComponentFixture<ProgramarVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramarVueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramarVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
