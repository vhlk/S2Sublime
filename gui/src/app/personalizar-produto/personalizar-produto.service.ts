import { Injectable } from '@angular/core';
import { PedidoPersonalizado} from '../../../../common/pedido-personalizado';

@Injectable({
  providedIn: 'root'
})
export class PersonalizarProdutoService {

  pedidosRealizados: PedidoPersonalizado[] = [];
  
  realizarPedido(pedido: PedidoPersonalizado): PedidoPersonalizado{
    var result = null;
    if(this.pedidoCompleto(pedido)){
      this.pedidosRealizados.push(pedido);
      result =  pedido;
    } 
    return result;
  }

  pedidoCompleto(pedido: PedidoPersonalizado):boolean{
    if(pedido.categoria.length == 0 || pedido.cor.length == 0 || pedido.quantidade <= 0){
      return false;
    } else {
      return true;
    }
  }

  getPedidos():PedidoPersonalizado[]{
    return this.pedidosRealizados;
  }

  getCategorias():string[]{
    return ['Almofada','Camisa','Caneca','Quadro', 'Kits Festa'];
  }

  getCores():string[]{
    return ['Amarelo','Azul','Branco','Cinza','Laranja','Marrom','Preto','Rosa','Verde','Vermelho','Violeta'];
  }

}
