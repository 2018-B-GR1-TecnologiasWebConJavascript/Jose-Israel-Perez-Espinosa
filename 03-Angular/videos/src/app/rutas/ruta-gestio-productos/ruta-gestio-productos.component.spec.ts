import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestioProductosComponent } from './ruta-gestio-productos.component';

describe('RutaGestioProductosComponent', () => {
  let component: RutaGestioProductosComponent;
  let fixture: ComponentFixture<RutaGestioProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestioProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestioProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
