import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Produto } from '../../../common/Produto';
import { EstoqueService } from './estoque/estoque.service';
import { ProdutosService } from './ProdutosService';

@Component({
    selector: 'app-root',
    templateUrl: './PaginaProduto.component.html',
    styleUrls: []
})

export class PaginaProdutoComponent implements OnInit {

    constructor(private estoqueService: EstoqueService, private produtosService: ProdutosService) { }

    listProds: Produto[] = [];
    listEst: Produto[] = this.listEstoque();

    reservar(produto:Produto): void{
        //servidor deve mandar um email para o vendedor para que ele efetue a reserva
        if(produto.quantidade<1){
            alert("Não foi possível solicitar a reserva. Produto esgotado!");
        } else {
            alert("Reserva solicitada com sucesso!");
        }
    }
    
    addListProds(produto: Produto, qtd: number): void {
        let prod = new Produto(produto.id, produto.produto, qtd, produto.categoria, produto.imgSrc);
        if (!this.produtosService.add(prod)) {
            this.produtosService.setQtd(prod, qtd);
        }
        this.listProds = this.produtosService.list();
    }

    listEstoque(): Produto[] {
        return this.estoqueService.list();
    }

    maxProdEstoque(produto: Produto): number {
        for (let element of this.listEst)
            if (element.id === produto.id) {
                return element.quantidade;
            }
        return 0;
    }

    ngOnInit(): void {
        this.listProds = this.produtosService.list();
    }
}