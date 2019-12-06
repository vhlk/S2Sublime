import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../../common/Produto';
import { EstoqueService } from '../estoque/estoque.service';
import { ProdutosService } from '../ProdutosService';
import {PersonalizarProdutoService} from '../personalizar-produto/personalizar-produto.service';

@Component({
    selector: 'app-estoque',
    templateUrl: './estoque.component.html',
    styleUrls: ['./estoque.component.css']
  })

  export class EstoqueComponent implements OnInit {
    categorias: string[];

    constructor(private estoqueService: EstoqueService, private personalizarService: PersonalizarProdutoService) { 
        this.categorias = personalizarService.getCategorias();
    }

    listEst: Produto[] = [];

    listEstoque(): void {
        this.estoqueService.list()
            .subscribe(
                as => { this.listEst = as; },
                msg => { alert(msg.message); }
            );
    }

    maxProdEstoque(produto: Produto): number {
        for (let element of this.listEst){
            if (element.id === produto.id) {
                return element.quantidade;
            }
        }
        return 0;
    }

    updateProduct(produto: Produto, qtd: number, nome: string, categoria: string): void {
        console.log(qtd);
        if(qtd && nome != ""){
            let prod = new Produto(produto.id, nome, qtd, categoria, produto.imgSrc);
            this.estoqueService.updateProduct(prod).subscribe(res => this.listEstoque());
        } else {
            alert("Todos os campos precisam estar preenchidos!");
        }
    }

    confirmPopUp(produto: Produto): void{
        if(confirm("Você tem certeza que deseja deletar " + produto.produto + "?")){
            this.estoqueService.deleteProduct(produto).subscribe(res => this.listEstoque());          
        }
    }

    ngOnInit() {
        this.listEstoque();
      }
  }