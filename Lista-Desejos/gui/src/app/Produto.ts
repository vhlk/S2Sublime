export class Produto {
  id: string;
  produto: string;
  quantidade: number;
  imgSrc: string;

  constructor(id: string, produto: string, quantidade: number, imgSrc: string){
    this.id = id;
    this.produto = produto;
    this.quantidade = quantidade;
    this.imgSrc = imgSrc;
  }

  copy(): Produto {
    let result: Produto = new Produto(this.id, this.produto, this.quantidade, this.imgSrc);
    return result;
  }
}
