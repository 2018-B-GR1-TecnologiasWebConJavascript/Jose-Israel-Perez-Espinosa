import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHomeUserComponent } from './ruta-home-user.component';

describe('RutaHomeUserComponent', () => {
  let component: RutaHomeUserComponent;
  let fixture: ComponentFixture<RutaHomeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaHomeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaHomeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
