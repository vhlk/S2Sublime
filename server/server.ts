import express = require('express');
import bodyParser = require('body-parser');

import {Produto} from '../common/Produto';
import {Estoque} from './estoque';

var server = express();

var produtos: Estoque = new Estoque();

server.get('/produtos', function (req, res) {
  let prod: string = JSON.stringify(produtos.getProdutos());
  res.send(prod);
})

server.post('/produto', function (req: express.Request, res: express.Response) {
  let prod: Produto = <Produto> req.body;
  prod = produtos.cadastrarProduto(prod.produto, prod.quantidade);
  if(prod){
    res.send({"sucess": "O produto foi cadastrado com sucesso"});
  }
  else {
    res.send({"failure": "O produto nao pode ser cadastrado"});
  }
})

server.put('/produto', function(req: express.Request, res: express.Response) {
  let prod: Produto = <Produto> req.body;
  prod = produtos.updateProduct(prod);
  if(prod){
    res.send({"sucess": "O produto foi atualizado com sucesso"});
  }
  else {
    res.send({"failure": "O produto nao pode ser atualizado"});
  }
})

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})