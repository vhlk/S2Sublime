import express = require('express');
import {Produto} from '../common/Produto';

var taserver = express();

var canecaPai = new Produto("12345", "Caneca Dia dos Pais", 15, "../gui/src/assets/img/canecaDiaDosPais.jpg");
var canecaMae = new Produto("12346", "Caneca Dia das Maes", 15, "../gui/src/assets/img/canecaDiaDasMaes.jpg");
var produtos = [canecaPai,canecaMae];

taserver.get('/', function (req, res) {
  res.send(produtos);
})

taserver.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
