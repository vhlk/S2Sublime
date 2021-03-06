import {Produto} from '../common/Produto';

export class Estoque {
    produtos: Produto[] = [];

    getProdutos(): Produto[] {
        return this.produtos;
    }

    updateProduct(prod: Produto): Produto{
        let result;
        for(let a of this.produtos){
            if(a.id === prod.id){
                a.quantidade = prod.quantidade;
                a.produto = prod.produto;
                a.imgSrc = prod.imgSrc;
                a.categoria = prod.categoria;
                console.log(a.categoria);
                result = a.copy();
            }
        }
        result;
        return result;
    }

    cadastrarProduto(id: string, nome: string, qtd: number, categoria: String, image: String): Produto{
        let novoProd = new Produto(id,nome,qtd,categoria,"./assets/img/" + image);
        this.produtos.push(novoProd);
        return novoProd.copy();
    }

    deleteProduct(prod: Produto): boolean{
        let result = false;
        let index;
        for(let a of this.produtos){
            if(a.id === prod.id){
                index = this.produtos.indexOf(a);
                result = true;
            }
        }
        this.produtos.splice(index,1);
        return result;
    }
}