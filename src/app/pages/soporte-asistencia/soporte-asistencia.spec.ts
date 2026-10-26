import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteAsistencia } from './soporte-asistencia';

describe('SoporteAsistencia', () => {
  let component: SoporteAsistencia;
  let fixture: ComponentFixture<SoporteAsistencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoporteAsistencia],
    }).compileComponents();

    fixture = TestBed.createComponent(SoporteAsistencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
