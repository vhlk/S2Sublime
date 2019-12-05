import { Component, OnInit } from '@angular/core';

import { Produto } from '../../../../common/Produto';
import { EstoqueService } from '../estoque/estoque.service';
import { ProdutosService } from '../ProdutosService';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor(private estoqueService: EstoqueService, private produtosService: ProdutosService) { }
  listProds: Produto[] = this.estoqueService.list();
  searchedProds: Produto[] = [];
  searched:number =0;

  search(productName) {
    this.searched =1;
    this.searchedProds = [];
    let product;
    for (let element of this.listProds) {
      if(element.produto.toLowerCase().includes(productName.toLowerCase())){
        product = new Produto(element.id,element.produto, element.quantidade, element.imgSrc);
        this.searchedProds.push(product);
      }
    }
  }
  hideSearch(){
    this.searched = 0;
  }
  ngOnInit() {
    this.searched = 0;
    this.listProds = this.estoqueService.list();
  }

}