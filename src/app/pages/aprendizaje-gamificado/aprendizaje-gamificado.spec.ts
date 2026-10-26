import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizajeGamificado } from './aprendizaje-gamificado';

describe('AprendizajeGamificado', () => {
  let component: AprendizajeGamificado;
  let fixture: ComponentFixture<AprendizajeGamificado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprendizajeGamificado],
    }).compileComponents();

    fixture = TestBed.createComponent(AprendizajeGamificado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
