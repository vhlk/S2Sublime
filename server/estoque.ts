import {Produto} from '../common/Produto';

export class Estoque {
    private canecaPai: Produto = new Produto("12345", "Caneca Dia dos Pais", 15, "../assets/img/canecaDiaDosPais.jpg");
    private canecaMae: Produto = new Produto("12346", "Caneca Dia das Maes", 15, "../assets/img/canecaDiaDasMaes.jpg");
    produtos: Produto[] = [this.canecaPai, this.canecaMae];

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
                result = a.copy();
            }
        }
        return result;
    }

    cadastrarProduto(nome: string, qtd: number): Produto{
        let num = +this.produtos[this.produtos.length-1].id;
        num += 1;
        let newId = "" + num;
        let novoProd = new Produto(newId,nome,qtd,"./assets/img/canecaDiaDosPais.jpg");
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