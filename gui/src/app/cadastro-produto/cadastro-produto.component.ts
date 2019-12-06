import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../../common/Produto';
import { EstoqueService } from '../estoque/estoque.service';
import { ProdutosService } from '../ProdutosService';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-cadastro-produto',
    templateUrl: './cadastro-produto.component.html',
    styleUrls: []
  })

  export class CadastroProdutoComponent implements OnInit {
    constructor(private estoqueService: EstoqueService, private produtosService: ProdutosService, private router:Router) { }

    cadastrarProduto(nome: string, qtd: number):void{
        this.estoqueService.cadastrarProduto(nome,qtd).subscribe(
            dale => dale.subscribe(res => this.router.navigate(["estoque"]))
         );
         
        
    }

    ngOnInit() {
        
      }
  }