import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Produto } from '../../../common/Produto';
import { element } from 'protractor';
import { ProdutosService } from './ProdutosService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private produtosService: ProdutosService ) {}

  listProds: Produto[] = [];

  addListProds(produto: Produto, qtd: number): void {
    let prod = new Produto(produto.id, produto.produto, qtd, produto.imgSrc);
    if(!this.produtosService.add(prod)){
      this.produtosService.setQtd(prod, qtd);
    }
    this.listProds = this.produtosService.list();
  }
}