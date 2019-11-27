import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Produto } from './Produto';
import { EstoqueService } from './EstoqueService';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  estoqueService = new EstoqueService();
  listProds: Produto[] = [];
  listEst: Produto[] = this.listEstoque();

  addListProds(produto: Produto, qtd:number): void {
    let existe = false;
    for (let elem of this.listProds) {
      if (elem.id === produto.id) {
        elem.quantidade = qtd;
        existe = true;
      }
    }
    if (!existe) {
      let prod: Produto = new Produto(produto.id, produto.produto, qtd, produto.imgSrc);
      this.listProds.push(prod);
    }
  }

  listEstoque(): Produto[] {
    return this.estoqueService.list();
  }

  maxProdEstoque(produto: Produto): number {
    for(let element of this.listEst)
      if(element.id === produto.id) {
        return element.quantidade;
      }
    return 0;
  }
}