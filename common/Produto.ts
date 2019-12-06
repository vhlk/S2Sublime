export class Produto {
  id: string;
  produto: string;
  quantidade: number;
  categoria: String;
  imgSrc: string;

  constructor(id: string, produto: string, quantidade: number, categoria: String, imgSrc: string) {
    this.id = id;
    this.produto = produto;
    this.quantidade = quantidade;
    this.categoria = categoria;
    this.imgSrc = imgSrc;
  }

  copy(): Produto {
    let result: Produto = new Produto(this.id, this.produto, this.quantidade,this.categoria, this.imgSrc);
    return result;
  }
}
