import { Produto } from '../../../common/Produto';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [];

    add(prod: Produto): boolean {
        let newProd = prod;
        for(let elems of this.produtos){
            if(elems.id === prod.id){
                return false;
            }
        }
        this.produtos.push(newProd);
        return true;
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

    delete(prod: Produto): void {
        for (let i = 0; i < this.produtos.length; i++) {
            if(this.produtos[i].id === prod.id){
                this.produtos.splice(i,1);
            }
        }
    }
}