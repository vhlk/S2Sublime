import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Produto } from '../../../../common/Produto';
import { EstoqueService } from '../estoque/estoque.service';
import { ProdutosService } from '../ProdutosService';

@Component({
    selector: 'app-root',
    templateUrl: './lista-desejos.component.html',
    styleUrls: []
})

export class ListaDesejosComponent implements OnInit {

    constructor(private estoqueService: EstoqueService, private produtosService: ProdutosService) { }

    listProds: Produto[] = [];
    listEst: Produto[] = this.listEstoque();

    addListProds(produto: Produto, qtd: number): void {
        let prod = new Produto(produto.id, produto.produto, qtd,produto.categoria, produto.imgSrc);
        if (!this.produtosService.add(prod)) {
            this.produtosService.setQtd(prod, qtd);
        }
        this.listProds = this.produtosService.list();
    }

    listEstoque(): Produto[] {
        return this.estoqueService.list();
    }

    maxProdEstoque(produto: Produto): number {
        for (let element of this.listEst) {
            if (element.id === produto.id) {
                return element.quantidade;
            }
        }
        return 0;
    }

    updateProdQtd(prod: Produto, qtd: number): void {
        this.produtosService.setQtd(prod,qtd);
    }

    CompartilharLista(nome: string, email: string){
        if(email != "" && nome != "" && email.includes("@")){
            //mandar um email através do servidor
            alert("Email enviado para "+nome);
        }
        else{
            alert("Verifique os dados digitados!");
        }
    }

    ngOnInit(): void {
        this.listProds = this.produtosService.list();
    }
}