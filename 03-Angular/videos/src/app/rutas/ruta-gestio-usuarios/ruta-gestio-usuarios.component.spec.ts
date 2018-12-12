import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestioUsuariosComponent } from './ruta-gestio-usuarios.component';

describe('RutaGestioUsuariosComponent', () => {
  let component: RutaGestioUsuariosComponent;
  let fixture: ComponentFixture<RutaGestioUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestioUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestioUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
