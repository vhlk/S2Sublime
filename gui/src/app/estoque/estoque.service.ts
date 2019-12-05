import { Produto } from '../../../../common/Produto';
import { Injectable } from '@angular/core';

@Injectable()
export class EstoqueService {
    canecaPai: Produto = new Produto("12345", "Caneca Dia dos Pais", 15, "../assets/img/canecaDiaDosPais.jpg");
    canecaMae: Produto = new Produto("12346", "Caneca Dia das Maes", 15, "../assets/img/canecaDiaDasMaes.jpg");
    produtos: Produto[] = [this.canecaPai, this.canecaMae];

    list(): Produto[] {
        let result: Produto[] = [];
        for(let a of this.produtos){
            result.push(a.copy());
        }
        return result;
    }

    updateProduct(prod: Produto, qtd: number, nome: string):void{
        for(let a of this.produtos){
            if(a.id === prod.id){
                a.quantidade = qtd;
                a.produto = nome;
            }
        }
    }

    cadastrarProduto(nome: string, qtd: number):void{
        let num = +this.produtos[this.produtos.length-1].id;
        num += 1;
        let newId = "" + num;
        let novoProd = new Produto(newId,nome,qtd,"./assets/img/canecaDiaDosPais.jpg");
        this.produtos.push(novoProd);
    }

    deleteProduct(prod: Produto):void{
        let index;
        for(let a of this.produtos){
            if(a.id === prod.id){
                index = this.produtos.indexOf(a);
            }
        }
        this.produtos.splice(index,1);
    }
}
