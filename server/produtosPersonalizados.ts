import {PedidoPersonalizado} from '../common/pedido-personalizado';

export class ProdutosPersonalizados{
  private pedidosPersonalizados: PedidoPersonalizado[] = [];

  getPedidos():PedidoPersonalizado[]{
    return this.pedidosPersonalizados;
  }

  realizarPedido(categoria: string, cor: string, quantidade: number, mensagem: string, scrImg: File):boolean{
    let novoPedido = new PedidoPersonalizado(categoria, cor, quantidade, mensagem);
    this.pedidosPersonalizados.push(novoPedido);
    return true;
  }
}