import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../../common/Produto';
import { EstoqueService } from '../estoque/estoque.service';
import { ProdutosService } from '../ProdutosService';
import { Router, RouterLink } from '@angular/router';
import {PersonalizarProdutoService} from '../personalizar-produto/personalizar-produto.service';

@Component({
    selector: 'app-cadastro-produto',
    templateUrl: './cadastro-produto.component.html',
    styleUrls: ['./cadastro-produto.component.css']
  })

  export class CadastroProdutoComponent implements OnInit {
    categorias: string[];
    listEst: Produto[];

    constructor(private estoqueService: EstoqueService, private personalizarService: PersonalizarProdutoService, private router:Router) {
        this.categorias = personalizarService.getCategorias();
     }

     listEstoque(): void {
      this.estoqueService.list()
          .subscribe(
              as => { this.listEst = as; },
              msg => { alert(msg.message); }
          );
     }

    cadastrarProduto(nome: string, qtd: number, categoria: string):void{
      if(nome != "" && qtd && qtd >= 0 && categoria != ""){
        this.listEstoque();
        for(let i = 0; i < this.listEst.length; i++){
          if(nome == this.listEst[i].produto){
            alert("Este produto já está cadastrado!");
            return;
          }
        }

        this.estoqueService.cadastrarProduto(nome,qtd,categoria).subscribe(
            dale => dale.subscribe(res => this.router.navigate(["estoque"]))
         );
      } else if (qtd < 0) {
        alert("A quantidade não pode ser negativa!");
      } else {
        alert("Todos os campos precisam estar preenchidos corretamente!");
      }
         
        
    }

    ngOnInit() {
        this.listEstoque();
      }
  }