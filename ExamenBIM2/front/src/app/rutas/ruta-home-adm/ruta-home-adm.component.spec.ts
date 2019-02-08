import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHomeAdmComponent } from './ruta-home-adm.component';

describe('RutaHomeAdmComponent', () => {
  let component: RutaHomeAdmComponent;
  let fixture: ComponentFixture<RutaHomeAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaHomeAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaHomeAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
