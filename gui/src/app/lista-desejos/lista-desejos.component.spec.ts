import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDesejosComponent } from './lista-desejos.component';

describe('ListaDesejosComponent', () => {
  let component: ListaDesejosComponent;
  let fixture: ComponentFixture<ListaDesejosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDesejosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDesejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
