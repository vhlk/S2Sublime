export class PedidoPersonalizado {
    categoria: string;
    cor: string;
    quantidade: number;
    mensagem: string;

    constructor(categoria: string, cor:string, quantidade: number, mensagem: string){
        this.categoria = categoria;
        this.cor = cor;
        this.quantidade = quantidade;
        this.mensagem = mensagem;
    }
}
