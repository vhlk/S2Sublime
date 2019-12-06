import { Component, OnInit } from '@angular/core';
import {PersonalizarProdutoService} from './personalizar-produto.service';
import {PedidoPersonalizado} from '../pedido-personalizado';

@Component({
  selector: 'app-personalizar-produto',
  templateUrl: './personalizar-produto.component.html',
  styleUrls: ['./personalizar-produto.component.css']
})
export class PersonalizarProdutoComponent implements OnInit {

  pedido: PedidoPersonalizado = new PedidoPersonalizado("","",1,"");
  categorias: string[];
  cores: string[];
  pedidos: PedidoPersonalizado[] = [];
  
  constructor(private personalizarService: PersonalizarProdutoService) {
    
    this.categorias = personalizarService.getCategorias();
    this.cores = personalizarService.getCores();
  }

  finalizarPedido(p:PedidoPersonalizado): void{
    if(this.personalizarService.realizarPedido(p)){
      this.pedidos.push(p);
      this.pedido = new PedidoPersonalizado("","",1,"");
    } 
  }
  
  ngOnInit() {
    this.pedidos = this.personalizarService.getPedidos();
  }

}
