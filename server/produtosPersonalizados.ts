import {PedidoPersonalizado} from '../common/pedido-personalizado';

export class ProdutosPersonalizados{
    pedidosPersonalizados: PedidoPersonalizado[] = [];

  getPedidos():PedidoPersonalizado[]{
    return this.pedidosPersonalizados;
  }

  realizarPedido(categoria: string, cor: string, quantidade: number, mensagem: string, scrImg: File):PedidoPersonalizado{
    let novoPedido = new PedidoPersonalizado(categoria, cor, quantidade, mensagem);
    this.pedidosPersonalizados.push(novoPedido);
    let copy = new PedidoPersonalizado(categoria, cor, quantidade, mensagem)
    return copy;
  }
}