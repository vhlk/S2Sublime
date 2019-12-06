import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizarProdutoComponent } from './personalizar-produto.component';

describe('PersonalizarProdutoComponent', () => {
  let component: PersonalizarProdutoComponent;
  let fixture: ComponentFixture<PersonalizarProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizarProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
