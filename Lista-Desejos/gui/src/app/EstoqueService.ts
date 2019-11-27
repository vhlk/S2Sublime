import { Produto } from './Produto';

export class EstoqueService {
    canecaPai: Produto = {id: "12345", produto: "Caneca Dia dos Pais", quantidade: "15", imgSrc: "./assets/img/canecaDiaDosPais.jpg"};
    canecaMae: Produto = {id: "12346", produto: "Caneca Dia das Maes", quantidade: "15", imgSrc: "./assets/img/canecaDiaDasMaes.jpg"};
    produtos: Produto[] = [this.canecaPai,this.canecaMae];

    adicionar (produto: Produto): void {
        this.produtos.push(produto);
    }

    list (): Produto[] {
        return this.produtos;
    }
}