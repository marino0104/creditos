import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrabusquedaComponent } from './barrabusqueda.component';

describe('BarrabusquedaComponent', () => {
  let component: BarrabusquedaComponent;
  let fixture: ComponentFixture<BarrabusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrabusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrabusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
