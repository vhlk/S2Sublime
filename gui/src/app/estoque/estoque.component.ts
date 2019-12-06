import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../../common/Produto';
import { EstoqueService } from '../estoque/estoque.service';
import { ProdutosService } from '../ProdutosService';

@Component({
    selector: 'app-estoque',
    templateUrl: './estoque.component.html',
    styleUrls: ['./estoque.component.css']
  })

  export class EstoqueComponent implements OnInit {
    constructor(private estoqueService: EstoqueService, private produtosService: ProdutosService) { }

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

    updateProduct(produto: Produto, qtd: number, nome: string): void {
        let prod = new Produto(produto.id, nome, qtd, produto.imgSrc);
        this.estoqueService.updateProduct(prod).subscribe(
            (prod) => { if (prod == null) alert("Unexpected fatal error trying to update student information! Please contact the systems administratos."); },
            (msg) => { alert(msg.message); }
         );
        this.listEstoque();
        
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