import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Produto } from '../../../../common/Produto';
import { EstoqueService } from '../estoque/estoque.service';
import { ProdutosService } from '../ProdutosService';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor(private estoqueService: EstoqueService, private router:Router) { 
    router.events.subscribe(res => {
      this.listEstoque();
    });
  }
  listProds: Produto[] = [];
  searchedProds: Produto[] = [];
  searched:number =0;

  search(productName) {
    this.searched =1;
    this.searchedProds = [];
    let product;
    for (let element of this.listProds) {
      if(element.produto.toLowerCase().includes(productName.toLowerCase())){
        product = new Produto(element.id,element.produto, element.quantidade, element.categoria, element.imgSrc);
        this.searchedProds.push(product);
      }
    }
  }
  hideSearch(){
    this.searched = 0;
  }
  listEstoque(): void {
    this.estoqueService.list()
    .subscribe(
        as => { this.listProds = as; },
        msg => { alert(msg.message); }
       );
  }
  ngOnInit() {
    this.searched = 0;
    this.listEstoque();
  }

}