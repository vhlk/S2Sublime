import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Produto } from '../../../common/Produto';
import { EstoqueService } from './estoque/estoque.service';
import { ProdutosService } from './ProdutosService';

@Component({
    selector: 'app-root',
    templateUrl: './PaginaInicial.component.html',
    styleUrls: []
})

export class PaginaInicialComponent implements OnInit {

    constructor(private estoqueService: EstoqueService, private produtosService: ProdutosService) { }

    listEst: Produto[] = [];

    addListProds(produto: Produto, qtd: number): void {
        let prod = new Produto(produto.id, produto.produto, qtd, produto.imgSrc);
        if (!this.produtosService.add(prod)) {
            this.produtosService.setQtd(prod, qtd);
        }
    }

    listEstoque(): void {
        this.estoqueService.list()
            .subscribe(
                as => { this.listEst = as; },
                msg => { alert(msg.message); }
            );
    }

    maxProdEstoque(produto: Produto): number {
        for (let element of this.listEst)
            if (element.id === produto.id) {
                return element.quantidade;
            }
        return 0;
    }

    ngOnInit(): void {
        this.listEstoque();
    }
}