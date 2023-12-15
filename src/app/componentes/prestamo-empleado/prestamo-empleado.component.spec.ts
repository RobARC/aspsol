import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoEmpleadoComponent } from './prestamo-empleado.component';

describe('PrestamoEmpleadoComponent', () => {
  let component: PrestamoEmpleadoComponent;
  let fixture: ComponentFixture<PrestamoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestamoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
