import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { EstoqueService } from '../estoque/estoque.service';
import { ProdutosService } from '../ProdutosService';

@Component({
    selector: 'app-estoque',
    templateUrl: './estoque.component.html',
    styleUrls: ['./estoque.component.css']
  })

  export class EstoqueComponent implements OnInit {
    constructor(private estoqueService: EstoqueService, private produtosService: ProdutosService) { }

    listEst: Produto[] = this.listEstoque();

    listEstoque(): Produto[] {
        return this.estoqueService.list();
    }

    maxProdEstoque(produto: Produto): number {
        for (let element of this.listEst){
            if (element.id === produto.id) {
                return element.quantidade;
            }
        }
        return 0;
    }

    updatePage(): void {
        this.listEst = this.estoqueService.list()
    }

    updateProduct(produto: Produto, qtd: number, nome: string): void {
        this.estoqueService.updateProduct(produto,qtd,nome);
        this.updatePage();
    }

    confirmPopUp(produto: Produto): void{
        if(confirm("Você tem certeza que deseja deletar " + produto.produto + "?")){
            this.estoqueService.deleteProduct(produto);
            this.updatePage();
        }
    }

    ngOnInit() {
        this.listEst = this.estoqueService.list();
      }
  }