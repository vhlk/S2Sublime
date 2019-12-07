import express = require('express');
import bodyParser = require('body-parser');

import {Produto} from '../common/Produto';
import {Estoque} from './estoque';
import {PedidoPersonalizado} from '../common/pedido-personalizado';
import { ProdutosPersonalizados } from './produtosPersonalizados';

var server = express();

var produtos: Estoque = new Estoque();
var pedidosPersonalizados: ProdutosPersonalizados = new ProdutosPersonalizados();

var allowCrossDomain = function(req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

server.use(allowCrossDomain);
server.use(bodyParser.json());

server.get('/pedidosPersonalizados', function(req: express.Request, res:express.Response){
  let pers: string = JSON.stringify(pedidosPersonalizados.getPedidos());
  res.send(pers);
})

server.post('/pedidoPersonalizado', function(req: express.Request, res:express.Response){
  let pers:PedidoPersonalizado = <PedidoPersonalizado>req.body;
  console.log(pers);
  let b = pedidosPersonalizados.realizarPedido(pers.categoria,pers.cor,pers.quantidade, pers.mensagem, null);
  if(b){
    res.send({"success": "O pedido foi realizado com sucesso"})
  } 
  else {
    res.send({"failure": "O pedido nao pode ser realizado"})
  }
})

server.get('/produtos', function (req: express.Request, res: express.Response) {
  let prod: string = JSON.stringify(produtos.getProdutos());
  res.send(prod);
})

server.post('/produto', function (req: express.Request, res: express.Response) {
  let prod: Produto = <Produto> req.body;
  console.log(prod);
  prod = produtos.cadastrarProduto(prod.id, prod.produto, prod.quantidade, prod.categoria);
  if(prod){
    res.send({"success": "O produto foi cadastrado com sucesso"});
  }
  else {
    res.send({"failure": "O produto nao pode ser cadastrado"});
  }
})

server.put('/produto', function(req: express.Request, res: express.Response) {
  let prod: Produto = <Produto> req.body;
  prod = produtos.updateProduct(prod);
  if(prod){
    res.send({"success": "O produto foi atualizado com sucesso"});
  }
  else {
    res.send({"failure": "O produto nao pode ser atualizado"});
  }
})

server.post('/deleteProduto', function(req: express.Request, res: express.Response) {
  let prod: Produto = <Produto> req.body;
  let result = false;
  result = produtos.deleteProduct(prod);
  if(prod){
    res.send({"success": "O produto foi deletado com sucesso"});
  }
  else {
    res.send({"failure": "O produto nao pode ser deletado"});
  }
})

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})