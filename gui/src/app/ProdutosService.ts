import { Produto } from './Produto';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [];

    add(prod: Produto): boolean {
        for(let elems of this.produtos){
            if(elems.id === prod.id){
                return false;
            }
        }
        this.produtos.push(prod);
    }

    list(): Produto[] {
        let result: Produto[] = [];
        for (let a of this.produtos) {
            result.push(a.copy());
        }
        return result;
    }

    setQtd(prod: Produto, qtd: number): void {
        for (let elems of this.produtos) {
            if(elems.id === prod.id){
                elems.quantidade = qtd;
            }
        }
    }
}