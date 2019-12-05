import { Component, OnInit } from '@angular/core';
import {PersonalizarProdutoService} from './personalizar-produto.service';
import {PedidoPersonalizado} from '../../../../common/pedido-personalizado';

@Component({
  selector: 'app-personalizar-produto',
  templateUrl: './personalizar-produto.component.html',
  styleUrls: ['./personalizar-produto.component.css']
})
export class PersonalizarProdutoComponent implements OnInit {

  
  pedido: PedidoPersonalizado = new PedidoPersonalizado("","",0,"");
  titulo: string;
  categorias: string[];
  cores: string[];
  pedidos: PedidoPersonalizado[];
  
  constructor(private personalizarService: PersonalizarProdutoService) {
    
    this.titulo = "Personalize seu produto";
    this.categorias = personalizarService.getCategorias();
    this.cores = personalizarService.getCores();
  }

  finalizarPedido(p:PedidoPersonalizado): void{
    if(this.personalizarService.realizarPedido(p)){
      this.pedidos.push(p);
      this.pedido = new PedidoPersonalizado("","",0,"");
    }
  }
  
  ngOnInit() {
    this.pedidos = this.personalizarService.getPedidos();
  }

}
