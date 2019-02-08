import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHomeUsrComponent } from './ruta-home-usr.component';

describe('RutaHomeUsrComponent', () => {
  let component: RutaHomeUsrComponent;
  let fixture: ComponentFixture<RutaHomeUsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaHomeUsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaHomeUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
