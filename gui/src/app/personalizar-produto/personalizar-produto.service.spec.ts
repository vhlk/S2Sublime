import { TestBed } from '@angular/core/testing';

import { PersonalizarProdutoService } from './personalizar-produto.service';

describe('PersonalizarProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalizarProdutoService = TestBed.get(PersonalizarProdutoService);
    expect(service).toBeTruthy();
  });
});
