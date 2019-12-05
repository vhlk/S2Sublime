import { Component, OnInit } from '@angular/core';

export interface pedidoPersonalizado {
  categoria: string;
  cor:string;
  quantidade:number;
  mensagem:string;
}


@Component({
  selector: 'app-personalizar-produto',
  templateUrl: './personalizar-produto.component.html',
  styleUrls: ['./personalizar-produto.component.css']
})
export class PersonalizarProdutoComponent implements OnInit {

  titulo: string;
  categorias: string[];
  cores: string[];
  pedidos: pedidoPersonalizado[];

  categoria:string;
  cor:string;
  quantidade:number;
  mensagem:string;

  constructor() { 
    this.titulo = "Personalize seu produto";
    this.categorias = ['Almofada','Camisa','Caneca','Quadro'];
    this.cores = ['Amarelo','Azul','Branco','Cinza','Laranja','Marrom','Preto','Rosa','Verde','Vermelho','Violeta'];
    this.pedidos = [];
  }
  ngOnInit() {
  }

  finalizarPedido(){
    let novoPedido: pedidoPersonalizado = {categoria:this.categoria, cor:this.cor, quantidade:this.quantidade, mensagem:this.mensagem};
    this.pedidos.push(novoPedido);
  }
}
