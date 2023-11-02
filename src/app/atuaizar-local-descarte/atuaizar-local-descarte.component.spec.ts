import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtuaizarLocalDescarteComponent } from './atuaizar-local-descarte.component';

describe('AtuaizarLocalDescarteComponent', () => {
  let component: AtuaizarLocalDescarteComponent;
  let fixture: ComponentFixture<AtuaizarLocalDescarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtuaizarLocalDescarteComponent]
    });
    fixture = TestBed.createComponent(AtuaizarLocalDescarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
